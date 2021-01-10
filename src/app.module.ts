import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm.config';
import { AuthController } from './auth/auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard';
import { RoleGuard } from './role/role.guard';

@Module({
  imports: [AuthModule, UsersModule, TypeOrmModule.forRoot(ormConfig)],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    // {
    //   provide: APP_GUARD,
    //   useClass: RoleGuard,
    // },
  ],
})
export class AppModule { }
