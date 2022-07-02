import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({ name: "cart" })
export class Cart {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;

    @ManyToOne(() => User, user => user.cart, { nullable: false, cascade: true })
    user: User;

    @ManyToOne(() => Product, product => product.photos, { nullable: false, cascade: true })
    product: Product;

    @Column({ nullable: false })
    quantity: number;

    @Column({ nullable: false })
    adjustedPrice: number;
}
