import { IsNotEmpty, MinLength } from "class-validator";

export class VerifyPaymentDto {
    @IsNotEmpty()
    @MinLength(1)
    sessionId: string;
}
