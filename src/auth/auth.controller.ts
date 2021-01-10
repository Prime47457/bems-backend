import { LocalAuthGuard } from './local/local-auth.guard';
import { AuthService } from "./auth.service";
import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { Public } from 'src/role/role.decorator';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }


    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

}