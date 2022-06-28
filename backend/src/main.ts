import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import helmet from "helmet";
import passport from "passport";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix("/api");
    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    app.enableCors({ origin: ["http://localhost:3000"], credentials: true });
    app.use(helmet());

    app.use(passport.initialize());

    await app.listen(3001);
}
bootstrap();
