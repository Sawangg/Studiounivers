import { BadRequestException, ClassSerializerInterceptor, Controller, Delete, Get, NotFoundException, Post, Request as RequestD, Res, UseGuards, UseInterceptors } from "@nestjs/common";
import type { Request, Response } from "express";
import { SerializedUser, User } from "src/user/entities/user.entity";
import { UserService } from "src/user/services/user.service";
import { authCookieName } from "src/utils/constants";
import { JwtAuthGuard } from "../guards/JWTGuard";
import { LocalAuthGuard } from "../guards/LocalGuard";
import { AuthService } from "../services/auth.service";

@Controller("auth")
export class AuthController {
    constructor(private readonly userService: UserService,
        private readonly authService: AuthService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @UseGuards(JwtAuthGuard)
    @Get("/")
    async isLogged(@RequestD() req: Request) {
        try {
            const user = await this.userService.findOne((req.user as User).id);
            return new SerializedUser(user);
        } catch {
            throw new NotFoundException();
        }
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @UseGuards(LocalAuthGuard)
    @Post("/login")
    async login(@RequestD() req: Request, @Res({ passthrough: true }) res: Response) {
        const tokens = await this.authService.login(req.user);
        if (!tokens) throw new BadRequestException();
        res.cookie(authCookieName, tokens, { httpOnly: true });
        return { msg: "Success" };
    }

    @UseGuards(JwtAuthGuard)
    @Delete("/logout")
    logout(@Res() res: Response) {
        res.clearCookie(authCookieName);
        return res.sendStatus(200);
    }
}
