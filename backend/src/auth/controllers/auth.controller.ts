import { ClassSerializerInterceptor, Controller, Delete, Get, NotFoundException, Post, Request as RequestD, Res, UseGuards, UseInterceptors } from "@nestjs/common";
import type { Request, Response } from "express";
import { SerializedUser, User } from "src/user/entities/user.entity";
import { UserService } from "src/user/services/user.service";
import { AuthenticatedGuard, LocalAuthGuard } from "../utils/LocalGuard";

@Controller("auth")
export class AuthController {
    constructor(private readonly customerService: UserService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @UseGuards(AuthenticatedGuard)
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
        return new SerializedUser(req.user);
    }

    @UseGuards(AuthenticatedGuard)
    @Delete("/logout")
    logout(@RequestD() req: Request, @Res() res: Response) {
        // @ts-expect-error: Need callback
        req.logout(() => res.sendStatus(200));
    }
}
