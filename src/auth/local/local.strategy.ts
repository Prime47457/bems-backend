import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Dependencies, HttpException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
@Dependencies(AuthService)
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(authService) {
        super();
        this.authService = authService;
    }

    async validate(username, password) {
        const user = await this.authService.validateProsumer(username, password);
        if (!user) {
            throw new HttpException("Wrong username or password", 401);
        }
        return user;
    }
}