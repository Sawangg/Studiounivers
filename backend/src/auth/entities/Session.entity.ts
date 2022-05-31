import type { ISession } from "connect-typeorm/out";
import { Entity, Column, Index, PrimaryColumn } from "typeorm";

@Entity({ name: "sessions" })
export class SessionEntity implements ISession {
    @Index()
    @Column("bigint", { nullable: false })
    expiredAt: number;

    @PrimaryColumn("varchar", { length: 255, nullable: false })
    id: string;

    @Column("text", { nullable: false })
    json: string;
}
