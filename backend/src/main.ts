import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix("/api");
    app.useGlobalPipes(new ValidationPipe());

    app.enableCors({ origin: ["http://localhost:3000"], credentials: true });
    app.use(helmet());

    app.use(cookieParser());

    await app.listen(3001);
}
bootstrap();
