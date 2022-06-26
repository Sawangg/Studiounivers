import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(50)
    username: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(50)
    password: string;
}
