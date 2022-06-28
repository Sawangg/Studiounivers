import { Exclude } from "class-transformer";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;

    @Column({ name: "username", nullable: false })
    username: string;

    @Column({ name: "password", nullable: false })
    password: string;

    @Column({ name: "admin", nullable: false, default: false })
    admin: boolean;

    @Column({ nullable: true })
    refreshToken: string;

    @Column({ nullable: true })
    refreshTokenExpires: Date;

    @OneToMany(() => Product, product => product.user, { cascade: true })
    product: Product[];
}

export class SerializedUser {
    @Exclude()
    password: string;

    @Exclude()
    refreshToken: string;

    @Exclude()
    refreshTokenExpires: Date;

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
    }
}
