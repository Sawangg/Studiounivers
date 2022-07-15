import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@user/entities/user.entity";
import { UserModule } from "@user/user.module";
import { AuthController } from "@auth/controllers/auth.controller";
import { AuthService } from "@auth/services/auth.service";
import { JwtStrategy } from "@auth/strategies/JWTStrategy";
import { LocalStrategy } from "@auth/strategies/LocalStrategy";

@Module({
    imports: [TypeOrmModule.forFeature([User]), UserModule],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtService, JwtStrategy],
})
export class AuthModule {}
