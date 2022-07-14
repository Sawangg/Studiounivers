import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { JwtStrategy } from "./strategies/JWTStrategy";
import { LocalStrategy } from "./strategies/LocalStrategy";

@Module({
    imports: [TypeOrmModule.forFeature([User]), UserModule],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtService, JwtStrategy],
})
export class AuthModule {}
