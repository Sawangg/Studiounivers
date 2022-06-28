import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpStatus, Param, Post, Res, UseInterceptors } from "@nestjs/common";
import type { Response } from "express";
import { CreateAdminDto } from "../dtos/CreateAdmin.dto";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { SerializedUser } from "../entities/user.entity";
import { UserService } from "../services/user.service";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post("register")
    async createUser(@Body() createUser: CreateUserDto) {
        const user = await this.userService.createUser(createUser);
        return new SerializedUser(user);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post("admin/register")
    async createAdmin(@Body() createUser: CreateAdminDto) {
        const admin = await this.userService.createAdmin(createUser);
        return new SerializedUser(admin);
    }

    @Delete("delete/:id")
    async deleteUser(@Param("id") id: string, @Res() res: Response) {
        const result = await this.userService.remove(id);
        return result.affected > 0 ? res.send(result).status(HttpStatus.OK) : res.status(HttpStatus.NOT_MODIFIED);
    }

    @Get("cart")
    getCart() {

    }

    @Post("card/add/:productId")
    async addToCart(@Param("productId") productId: string) {
        const result = await this.userService.remove(productId);
        if (!result) return new BadRequestException();
        return result;
    }
}
