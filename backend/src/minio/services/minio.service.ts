import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { MinioService as MinioClientService } from "nestjs-minio-client";
import { ConfigService } from "@nestjs/config";
import * as crypto from "crypto";

@Injectable()
export class MinioService {
    constructor(private readonly minio: MinioClientService, private readonly configService: ConfigService) {}

    public async upload(file: Express.Multer.File) {
        if (!(file.mimetype.includes("jpeg") || file.mimetype.includes("png"))) {
            throw new HttpException("File type not supported", HttpStatus.BAD_REQUEST);
        }
        const hashedFileName = crypto.createHash("md5").update(Date.now().toString()).digest("hex");
        const extension = file.originalname.substring(file.originalname.lastIndexOf("."), file.originalname.length);
        const fileName = hashedFileName + extension;

        await this.minio.client.putObject(this.configService.get<string>("MINIO_BUCKET_NAME"), fileName, file.buffer, {
            "Content-Type": file.mimetype,
        });

        // eslint-disable-next-line prettier/prettier
        return `${this.configService.get<string>("MINIO_PROTOCOL")}://${this.configService.get<string>("MINIO_ENDPOINT")}:${this.configService.get<string>("MINIO_PORT")}/${this.configService.get<string>("MINIO_BUCKET_NAME")}/${fileName}`;
    }

    delete(fileName: string) {
        this.minio.client.removeObject(this.configService.get<string>("MINIO_BUCKET_NAME"), fileName, (err) => {
            if (err) throw new HttpException("An error occured when deleting!", HttpStatus.BAD_REQUEST);
        });
    }
}
