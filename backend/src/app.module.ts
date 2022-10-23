import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "@auth/auth.module";
import { OrderModule } from "@order/order.module";
import { PaymentModule } from "@payment/payment.module";
import { ProductModule } from "@product/product.module";
import { UserModule } from "@user/user.module";
import { MinioModule } from "@minio/minio.module";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, cache: true }),
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>("JWT_SECRET"),
                signOptions: { expiresIn: "1h" },
            }),
            inject: [ConfigService],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: "postgres",
                host: configService.get("DB_HOST"),
                port: +configService.get<number>("DB_PORT"),
                username: configService.get("DB_USERNAME"),
                password: configService.get("DB_PASSWORD"),
                database: configService.get("DB_NAME"),
                synchronize: true,
                autoLoadEntities: true,
                keepConnectionAlive: true,
            }),
            inject: [ConfigService],
        }),
        AuthModule,
        MinioModule,
        OrderModule,
        PaymentModule,
        ProductModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
