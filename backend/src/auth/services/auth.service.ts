import { Inject, Injectable } from "@nestjs/common";
import { UserService } from "src/user/services/user.service";
import { compatePasswords } from "src/utils/password";
import type { User } from "src/user/entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
        @Inject(UserService)
        private readonly customerService: UserService,
    ) { }

    async validateUser(username: string, rawPass: string): Promise<User | null> {
        const userDB = await this.customerService.findByUsername(username);
        if (userDB && compatePasswords(rawPass, userDB.password)) return userDB;
        return null;
    }
}
