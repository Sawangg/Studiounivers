import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import type { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/services/user.service";
import { compatePasswords } from "src/utils/password";

@Injectable()
export class AuthService {
    constructor(
        @Inject(UserService) private readonly customerService: UserService,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService) { }

    async validateUser(username: string, rawPass: string): Promise<User | null> {
        const userDB = await this.customerService.findByUsername(username);
        if (userDB && compatePasswords(rawPass, userDB.password)) return userDB;
        return null;
    }

    login(user: any) {
        return {
            access_token: this.jwtService.sign({ username: user.username, sub: user.id }, { secret: this.configService.get("JWT_SECRET") }),
        };
    }
}
