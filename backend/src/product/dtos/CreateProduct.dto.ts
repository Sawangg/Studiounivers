import { IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(50)
    name: string;

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(50)
    reference: string;

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(7)
    price: number;

    @IsNotEmpty()
    @MinLength(1)
    description: string;

    @IsOptional()
    tags: Array<string>;

    @IsOptional()
    photos: Array<string>;

    @IsOptional()
    addedAt: Date;
}
