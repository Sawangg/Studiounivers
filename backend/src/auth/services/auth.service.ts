import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import randtoken from "rand-token";
import type { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/services/user.service";
import { comparePasswords } from "src/utils/password";

@Injectable()
export class AuthService {
    constructor(
        @Inject(UserService) private readonly userService: UserService,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService) { }

    async validateUser(username: string, rawPass: string): Promise<User | null> {
        const userDB = await this.userService.findByUsername(username);
        if (userDB && comparePasswords(rawPass, userDB.password)) return userDB;
        return null;
    }

    async generateRefreshToken(userId: string): Promise<string> {
        const refreshToken = randtoken.generate(16);
        const expirydate = new Date();
        expirydate.setDate(expirydate.getDate() + 6);
        await this.userService.saveOrUpdateRefreshToken(refreshToken, userId, expirydate);
        return refreshToken;
    }

    async login(user: any) {
        return {
            access_token: this.jwtService.sign({ username: user.username, sub: user.id }, { secret: this.configService.get("JWT_SECRET") }),
            refresh_token: await this.generateRefreshToken(user.id),
        };
    }
}
