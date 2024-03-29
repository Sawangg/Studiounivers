import {
    BadRequestException,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Post,
    Request as RequestD,
    Res,
    UseGuards,
    UseInterceptors,
} from "@nestjs/common";
import type { Request, Response } from "express";
import { SerializedUser } from "@user/entities/user.entity";
import { UserService } from "@user/services/user.service";
import { authCookieName } from "@utils/constants";
import { JwtAuthGuard } from "@auth/guards/JWTGuard";
import { LocalAuthGuard } from "@auth/guards/LocalGuard";
import { AuthService } from "@auth/services/auth.service";

@Controller("auth")
export class AuthController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @UseGuards(JwtAuthGuard)
    @Get("/")
    async isLogged(@RequestD() req: Request) {
        try {
            const user = await this.userService.findOne(req.user.id);
            return new SerializedUser(user);
        } catch {
            throw new NotFoundException();
        }
    }

    @UseGuards(LocalAuthGuard)
    @Post("/login")
    async login(@RequestD() req: Request, @Res({ passthrough: true }) res: Response) {
        const tokens = await this.authService.login(req.user);
        if (!tokens) throw new BadRequestException("No token created");
        res.cookie(authCookieName, tokens, { httpOnly: true, sameSite: true });
        return tokens;
    }

    @UseGuards(JwtAuthGuard)
    @Delete("/logout")
    logout(@Res() res: Response) {
        res.clearCookie(authCookieName);
        // TODO: blacklist old JWT token
        return res.sendStatus(200);
    }
}
