import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Неверный формат email' })
  @IsNotEmpty({ message: 'Email обязателен' })
  email: string;

  @IsNotEmpty({ message: 'Пароль обязателен' })
  @MinLength(6, { message: 'Пароль должен быть не менее 6 символов' })
  password: string;

  @IsNotEmpty({ message: 'Username обязателен' })
  @MinLength(6, { message: 'Username должен быть не менее 6 символов' })
  username: string;

  @IsOptional()
  firstName?: string;

  @IsOptional()
  lastName?: string;
}
