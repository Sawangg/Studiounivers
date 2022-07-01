import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => User, user => user.product)
    user: User;
}
