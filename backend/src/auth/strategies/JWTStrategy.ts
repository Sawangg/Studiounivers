import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "@user/services/user.service";
import type { Request } from "express";
import { authCookieName } from "@utils/constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService, readonly configService: ConfigService) {
        super({
            ignoreExpiration: false,
            secretOrKey: configService.get<string>("JWT_SECRET"),
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    // Get access token from header first if failed try with the cookie
                    const header = request.headers["authorization"];
                    if (header && header.length > 0) return header.split(" ")[1];
                    const cookie = request.cookies[authCookieName];
                    if (!cookie) return null;
                    return cookie.access_token;
                },
            ]),
        });
    }

    async validate(payload: { username: string; sub: number }) {
        if (payload === null) throw new BadRequestException("Invalid jwt token");

        const user = await this.userService.findByUsername(payload.username);
        if (!user) throw new UnauthorizedException("User not found");

        if (!user.refreshTokenExpires || new Date() > user.refreshTokenExpires)
            throw new BadRequestException("Refresh token expired");

        return { id: payload.sub, username: payload.username };
    }
}
