import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "@order/entities/order.entity";
import type { DeleteResult, Repository } from "typeorm";
import type { User } from "@user/entities/user.entity";
import { UserService } from "@user/services/user.service";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @Inject(UserService)
        private readonly userService: UserService,
    ) {}

    async createOrder(user: User, stripeSession: string) {
        const currentCart = await this.userService.getCart(user.id);
        if (!currentCart) throw new BadRequestException("No cart found");
        const newOrder = this.orderRepository.create({
            user,
            stripeSession,
            products: currentCart.productsInCart,
            total: currentCart.total,
        });
        return this.orderRepository.save(newOrder);
    }

    findOne(id: number) {
        return this.orderRepository.findOne({ where: { id } });
    }

    findByStripeSessionId(stripeId: string) {
        return this.orderRepository.findOne({ where: { stripeSession: stripeId } });
    }

    async remove(id: string): Promise<DeleteResult> {
        const deleted = await this.orderRepository.delete(id);
        return deleted;
    }
}
