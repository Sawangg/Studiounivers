import { Cart } from "src/user/entities/cart.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    reference: string;

    @Column({ nullable: false })
    price: number;

    @Column({ nullable: false })
    description: string;

    @Column({ type: "varchar", array: true, default: [], nullable: false })
    tags: string[];

    @Column({ type: "text", array: true, default: [], nullable: false })
    photos: string[];

    @Column({ nullable: false })
    addedAt: Date;

    @OneToMany(() => Cart, (cart) => cart.product)
    inCart: Cart[];
}
