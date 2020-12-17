import { ConflictException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { QueryFailedError, Repository } from 'typeorm'
import { hashSync } from 'bcrypt'

import { User } from './users.entity'
import CreateUserDto from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User> {
    return await this.userRepository.findOne({ where: { username } })
  }

  async create(user: CreateUserDto): Promise<User> {
    user.password = hashSync(user.password, 10)

    // if username already exists (the EAFP principle)
    try {
      return await this.userRepository.save(user)
    } catch (e) {
      if (e instanceof QueryFailedError) {
        throw new ConflictException('This username is already taken')
      }
    }
  }
}
