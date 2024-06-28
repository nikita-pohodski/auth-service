import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    description: 'Login',
    type: String,
    required: true,
  })
  @IsNotEmpty({ message: 'Field "login" should be enter' })
  @IsString({ message: 'Field "login" should be string' })
  readonly login: string;

  @ApiProperty({
    description: 'Password',
    type: String,
    required: true,
  })
  @IsNotEmpty({ message: 'Field "password" should be enter' })
  @IsString({ message: 'Field "password" should be string' })
  readonly password: string;
}
