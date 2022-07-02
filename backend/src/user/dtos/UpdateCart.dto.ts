import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class UpdateCartDto {
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    productId: number;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    @Max(99)
    quantity: number;
}
