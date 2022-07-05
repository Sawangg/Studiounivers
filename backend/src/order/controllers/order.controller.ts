import { Controller, Delete, HttpStatus, Param, Res } from "@nestjs/common";
import type { Response } from "express";
import { OrderService } from "../services/order.service";

@Controller("order")
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @Delete("delete/:id")
    async deleteUser(@Param("id") id: string, @Res() res: Response) {
        const result = await this.orderService.remove(id);
        return result.affected > 0 ? res.send(result).status(HttpStatus.OK) : res.status(HttpStatus.NOT_MODIFIED);
    }
}
