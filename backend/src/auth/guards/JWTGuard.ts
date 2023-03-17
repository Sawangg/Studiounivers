import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
    override handleRequest(err: never, user: never) {
        if (err || !user) throw new UnauthorizedException(err);
        return user;
    }
}
