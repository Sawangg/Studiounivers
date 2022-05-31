import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import type { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/services/user.service";

export class SessionSerializer extends PassportSerializer {
    constructor(@Inject(UserService) private readonly customerService: UserService) {
        super();
    }

    serializeUser(user: User, done: (err: any, user: User) => void) {
        done(null, user);
    }

    async deserializeUser(user: User, done: (err: any, user: User) => void) {
        const customerDB = await this.customerService.findOne(user.id);
        return customerDB ? done(null, user) : done(null, null);
    }
}
