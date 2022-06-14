import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { TypeormStore } from "connect-typeorm";
import session from "express-session";
import helmet from "helmet";
import passport from "passport";
import { getConnection } from "typeorm";
import { AppModule } from "./app.module";
import { SessionEntity } from "./auth/entities/Session.entity";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(
        session({
            name: "sid",
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 3600000,
                sameSite: "strict",
                path: "/",
            },
            store: new TypeormStore().connect(getConnection().getRepository(SessionEntity)),
        }),
    );

    app.setGlobalPrefix("/api");
    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    app.enableCors({ origin: ["http://localhost:3000"], credentials: true });
    app.use(helmet());

    app.use(passport.initialize());
    app.use(passport.session());

    await app.listen(3001);
}
bootstrap();
