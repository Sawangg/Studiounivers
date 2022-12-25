import { IsOptional, MaxLength, MinLength } from "class-validator";

export class UpdateProductDto {
    @IsOptional()
    @MinLength(1)
    @MaxLength(50)
    name: string;

    @IsOptional()
    @MinLength(1)
    @MaxLength(50)
    reference: string;

    @IsOptional()
    @MinLength(1)
    @MaxLength(7)
    price: number;

    @IsOptional()
    @MinLength(1)
    description: string;

    @IsOptional()
    tags: Array<string>;

    @IsOptional()
    photos: Array<string>;

    @IsOptional()
    addedAt: Date;
}
