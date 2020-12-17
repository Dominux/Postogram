import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import CreateUserDto from 'src/users/dto/create-user.dto'

import { User } from 'src/users/users.entity'
import { AuthService } from './auth.service'
import { Public } from './constants'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() user: User): Promise<Object> {
    return await this.authService.login(user)
  }

  @Public()
  @Post('register')
  async register(@Body() user: CreateUserDto): Promise<Object> {
    return await this.authService.register(user)
  }
}
