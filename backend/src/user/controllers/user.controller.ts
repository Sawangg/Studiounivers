import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpStatus, Param, Post, Res, UseInterceptors } from "@nestjs/common";
import type { Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { SerializedUser } from "../entities/user.entity";
import { UserService } from "../services/user.service";

@Controller("user")
export class UserController {
    constructor(private readonly customerService: UserService) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post("register")
    async createCustomer(@Body() createCustomer: CreateUserDto) {
        const customer = await this.customerService.createCustomer(createCustomer);
        return new SerializedUser(customer);
    }

    @Delete("delete/:id")
    async deleteCustomer(@Param("id") id: string, @Res() res: Response) {
        const result = await this.customerService.remove(id);
        return result.affected > 0 ? res.send(result).status(HttpStatus.OK) : res.status(HttpStatus.NOT_MODIFIED);
    }

    @Get("cart")
    getCart() {

    }

    @Post("card/add/:productId")
    async addToCart(@Param("productId") productId: string) {
        const result = await this.customerService.remove(productId);
        if (!result) return new BadRequestException();
        return result;
    }
}
