import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ username });
    if (user) {
      if (user.password === password) {
        const { password, ...result } = user;
        return result;
      }
    } else {
      return null;
    }
  }

  async login(user: any) {
    const payload = { user };
    const token = await this.jwtService.signAsync(payload);
    return { token };
  }
}
