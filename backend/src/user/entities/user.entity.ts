import { Exclude } from "class-transformer";
import { Product } from "src/product/entities/product.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;

    @Column({ name: "username", nullable: false })
    username: string;

    @Column({ name: "password", nullable: false })
    password: string;

    @OneToMany(() => Product, product => product.user, { cascade: true })
    product: Product[];
}

export class SerializedUser {
    id: number;
    username: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
    }
}
