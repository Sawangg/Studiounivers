import { Exclude } from "class-transformer";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "./cart.entity";

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
    refreshToken?: string;

    @Column({ nullable: true })
    refreshTokenExpires?: Date;

    @OneToMany(() => Cart, cart => cart.user)
    cart?: Cart[];
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
