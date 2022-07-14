import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum OrderStatus {
    CREATED = "created",
    EXPEDITED = "expedited",
    PROGRESS = "in progress",
    DELIVERED = "delivered",
}

@Entity({ name: "orders" })
export class Order {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;

    @ManyToOne(() => User, (user) => user.orders, { nullable: false })
    user: User;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];

    @Column({ nullable: false })
    stripeSession: string;

    @Column({
        nullable: false,
        enum: OrderStatus,
        default: OrderStatus.CREATED,
    })
    status?: string;

    @Column({ nullable: false })
    total: number;
}
