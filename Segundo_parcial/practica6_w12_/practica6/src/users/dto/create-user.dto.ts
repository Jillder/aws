import { IsEmail, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsString()
    @MinLength(4)
    username: string;

    @IsString()
    @MinLength(8)
    password: string;

    @IsEmail()
    email: string;
}

