import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class CreatePaymentSessionDto {
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    amount: number;
}
