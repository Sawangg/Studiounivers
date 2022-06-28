import { ClassSerializerInterceptor, Controller, Delete, Get, NotFoundException, Post, Request as RequestD, Res, UseGuards, UseInterceptors } from "@nestjs/common";
import type { Request, Response } from "express";
import { SerializedUser, User } from "src/user/entities/user.entity";
import { UserService } from "src/user/services/user.service";
import { JwtAuthGuard } from "../guards/JWTGuard";
import { LocalAuthGuard } from "../guards/LocalGuard";
import { AuthService } from "../services/auth.service";

@Controller("auth")
export class AuthController {
    constructor(private readonly customerService: UserService,
        private readonly authService: AuthService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @UseGuards(JwtAuthGuard)
    @Get("/")
    async isLogged(@RequestD() req: Request) {
        try {
            const user = await this.customerService.findOne((req.user as User).id);
            return new SerializedUser(user);
        } catch {
            throw new NotFoundException();
        }
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @UseGuards(LocalAuthGuard)
    @Post("/login")
    login(@RequestD() req: Request) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete("/logout")
    logout(@RequestD() req: Request, @Res() res: Response) {
        req.logout(() => res.sendStatus(200));
    }
}
