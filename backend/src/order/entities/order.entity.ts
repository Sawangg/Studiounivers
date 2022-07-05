import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "order" })
export class Order {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number;

    @ManyToOne(() => User, user => user.orders)
    userId: number;

    @Column({ nullable: false })
    stripe_session: string;

    // Created, expedited, in progress, delivered
    @Column({ nullable: false, default: "created" })
    status: string;
}
