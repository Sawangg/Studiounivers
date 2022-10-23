import { Module } from "@nestjs/common";
import { MinioModule as MinioClientModule } from "nestjs-minio-client";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MinioService } from "@minio/services/minio.service";

@Module({
    imports: [
        MinioClientModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                endPoint: configService.get("MINIO_ENDPOINT"),
                port: parseInt(configService.get("MINIO_PORT")),
                useSSL: false, // change if https
                accessKey: configService.get("MINIO_ACCESS_KEY"),
                secretKey: configService.get("MINIO_SECRET_KEY"),
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [MinioService],
    exports: [MinioService],
})
export class MinioModule {}
