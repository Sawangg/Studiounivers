import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { encodePassword } from "src/utils/password";
import { Cart } from "../entities/cart.entity";
import { User } from "../entities/user.entity";
import { Product } from "src/product/entities/product.entity";
import type { DeleteResult, Repository } from "typeorm";
import type { AddToCartDto } from "../dtos/AddToCart.dto";
import type { CreateAdminDto } from "../dtos/CreateAdmin.dto";
import type { CreateUserDto } from "../dtos/CreateUser.dto";
import type { UpdateCartDto } from "../dtos/UpdateCart.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        @InjectRepository(Cart)
        private readonly cartRepository: Repository<Cart>,
    ) {}

    createUser(createUserDto: CreateUserDto) {
        const password = encodePassword(createUserDto.password);
        const newUser = this.usersRepository.create({ ...createUserDto, password });
        return this.usersRepository.save(newUser);
    }

    createAdmin(createAdminDto: CreateAdminDto) {
        const password = encodePassword(createAdminDto.password);
        const newAdmin = this.usersRepository.create({ ...createAdminDto, password });
        return this.usersRepository.save(newAdmin);
    }

    async addToCart(userId: number, addToCart: AddToCartDto) {
        const product = await this.productRepository.findOne({ where: { id: +addToCart.productId } });
        if (!product) throw new BadRequestException();
        const user = await this.findOne(userId);
        if (!user) throw new BadRequestException();

        // Check if product is in cart and update if so
        const result = await this.cartRepository
            .createQueryBuilder("cart")
            .leftJoin("cart.user", "users")
            .leftJoinAndSelect("cart.product", "product")
            .where("users.id = :userId", { userId })
            .andWhere("product.id = :productId", { productId: addToCart.productId })
            .getOne();
        if (result) return this.updateCart(userId, addToCart);

        await this.cartRepository.save({
            user,
            product,
            quantity: addToCart.quantity,
            adjustedPrice: product.price * addToCart.quantity,
        });
        return this.getCart(userId);
    }

    async updateCart(userId: number, updatedCart: UpdateCartDto) {
        // Remove here for saving system
        if (updatedCart.quantity === 0) return this.removeFromCart(userId, updatedCart.productId);
        const product = await this.productRepository.findOne({ where: { id: +updatedCart.productId } });
        if (!product) throw new BadRequestException();
        await this.cartRepository
            .createQueryBuilder("cart")
            .update()
            .set({
                quantity: updatedCart.quantity,
                adjustedPrice: product.price * updatedCart.quantity,
            })
            .where('"cart"."userId" = :userId', { userId })
            .andWhere('"cart"."productId" = :productId', { productId: updatedCart.productId })
            .execute();
        return this.getCart(userId);
    }

    async getCart(id: number) {
        let total = 0;
        const productsInCart = await this.cartRepository
            .createQueryBuilder("cart")
            .leftJoin("cart.user", "users")
            .leftJoinAndSelect("cart.product", "product")
            .where("users.id = :id", { id })
            .orderBy("product.addedAt", "DESC")
            .getMany();
        if (productsInCart.length > 0) productsInCart.forEach((product) => (total += product.adjustedPrice));
        return { total, productsInCart };
    }

    async removeFromCart(userId: number, productId: number) {
        await this.cartRepository.query(`DELETE FROM "cart" WHERE "cart"."productId" = $1 AND "cart"."userId" = $2`, [
            productId,
            userId,
        ]);
        return this.getCart(userId);
    }

    saveOrUpdateRefreshToken(refreshToken: string, id: number, refreshTokenExpires: Date) {
        return this.usersRepository.update(id, { refreshToken, refreshTokenExpires });
    }

    findByUsername(username: string) {
        return this.usersRepository.findOne({ where: { username } });
    }

    findOne(id: number) {
        return this.usersRepository.findOne({ where: { id } });
    }

    async remove(id: string): Promise<DeleteResult> {
        const deleted = await this.usersRepository.delete(id);
        return deleted;
    }
}
