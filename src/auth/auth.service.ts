import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcrypt'

import { UsersService } from '../users/users.service'
import CreateUserDto from 'src/users/dto/create-user.dto'
import { User } from 'src/users/users.entity'
import AccessTokenDto from './dto/access-token.dto'
import LoginUserDto from './dto/login-user.dto'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findByUsername(username)
    if (user && compare(pass, user.password)) {
      return user
    }
  }

  async getAccessToken(user: User): Promise<AccessTokenDto> {
    const payload = { username: user.username, sub: user.id }
    return {
      accessToken: this.jwtService.sign(payload),
    }
  }

  async login(user: LoginUserDto): Promise<AccessTokenDto> {
    const regUser = await this.validateUser(user.username, user.password)
    if (!regUser) {
      throw new UnauthorizedException()
    }
    return await this.getAccessToken(regUser)
  }

  async register(user: CreateUserDto): Promise<AccessTokenDto> {
    const newUser = await this.usersService.create(user)
    return await this.getAccessToken(newUser)
  }
}
