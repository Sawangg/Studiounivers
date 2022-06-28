import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateAdminDto {
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(50)
    username: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(50)
    password: string;

    @IsNotEmpty()
    admin: boolean;
}
