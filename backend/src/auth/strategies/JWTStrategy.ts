import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import type { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "src/user/services/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService, readonly configService: ConfigService) {
        super({
            ignoreExpiration: true,
            passReqToCallback: true,
            secretOrKey: configService.get<string>("JWT_SECRET"),
            jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
                const data = request.cookies["auth-cookie"];
                if (!data) return null;
                return data.access_token;
            }]),
        });
    }

    async validate(req: Request, payload: any) {
        if (payload === null) throw new BadRequestException("invalid jwt token");

        const user = await this.userService.findByUsername(payload.username);
        if (!user) throw new UnauthorizedException();

        const data = req.cookies["auth-cookie"];
        if (!data?.refresh_token || user.refreshToken !== data?.refresh_token) throw new BadRequestException("invalid refresh token");
        if (!user.refreshTokenExpires || new Date() > user.refreshTokenExpires) throw new BadRequestException("Refresh token expired");

        return { id: payload.sub, username: payload.username };
    }
}
