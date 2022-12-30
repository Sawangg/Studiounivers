import {
    BadRequestException,
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    Res,
    Request as RequestD,
    UseGuards,
    UseInterceptors,
    NotFoundException,
    ParseIntPipe,
} from "@nestjs/common";
import type { Request, Response } from "express";
import { JwtAuthGuard } from "@auth/guards/JWTGuard";
import { SerializedUser } from "@user/entities/user.entity";
import { UserService } from "@user/services/user.service";
import { AddToCartDto } from "@user/dtos/AddToCart.dto";
import { UpdateCartDto } from "@user/dtos/UpdateCart.dto";
import { CreateUserDto } from "@user/dtos/CreateUser.dto";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Post("register")
    async createUser(@Body() createUser: CreateUserDto) {
        const user = await this.userService.createUser(createUser);
        return new SerializedUser(user);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post("admin/register")
    async createAdmin(@Body() createUser: CreateUserDto) {
        const admin = await this.userService.createAdmin(createUser);
        return new SerializedUser(admin);
    }

    @Delete("delete/:id")
    async deleteUser(@Param("id") id: string, @Res() res: Response) {
        const result = await this.userService.remove(id);
        return result.affected > 0 ? res.send(result).status(HttpStatus.OK) : res.status(HttpStatus.NOT_MODIFIED);
    }

    @UseGuards(JwtAuthGuard)
    @Post("cart/add")
    async addToCart(@RequestD() req: Request, @Body() addToCart: AddToCartDto) {
        const data = await this.userService.addToCart(req.user.id, addToCart);
        if (!data) return new BadRequestException();
        return data;
    }

    @UseGuards(JwtAuthGuard)
    @Post("cart/update")
    async cartUpdate(@RequestD() req: Request, @Body() updatedCart: UpdateCartDto) {
        const data = await this.userService.updateCart(req.user.id, updatedCart);
        if (!data) return new BadRequestException();
        return data;
    }

    @UseGuards(JwtAuthGuard)
    @Delete("cart/remove/:productId")
    async removeFromCart(
        @RequestD() req: Request,
        @Param("productId", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) productId: number,
    ) {
        const data = await this.userService.removeFromCart(req.user.id, productId);
        if (!data) throw new NotFoundException();
        return data;
    }

    @UseGuards(JwtAuthGuard)
    @Get("cart")
    async getCart(@RequestD() req: Request) {
        return this.userService.getCart(req.user.id);
    }
}
