import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { PassportModule } from "@nestjs/passport";
import { SessionEntity } from "./auth/entities/Session.entity";
import { ProductModule } from "./product/product.module";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, cache: true }),
        PassportModule.register({ session: true }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: "postgres",
                host: configService.get("DB_HOST"),
                port: +configService.get<number>("DB_PORT"),
                username: configService.get("DB_USERNAME"),
                password: configService.get("DB_PASSWORD"),
                database: configService.get("DB_NAME"),
                entities: [SessionEntity],
                synchronize: true,
                autoLoadEntities: true,
                keepConnectionAlive: true,
            }),
            inject: [ConfigService],
        }),
        AuthModule,
        UserModule,
        ProductModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
