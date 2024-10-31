import { IsEmail, IsString } from 'class-validator'

export class OrderDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  message: string
}
