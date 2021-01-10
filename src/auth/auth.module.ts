import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from "../users/users.module";
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local/local.strategy';
import { jwtConstants } from './jwt/constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1200s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule { }
