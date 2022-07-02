import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class AddToCartDto {
    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    productId: number;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    @Max(99)
    quantity: number;
}
