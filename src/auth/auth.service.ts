import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService

    ) { }

    async validateProsumer(username: string, pass: string): Promise<any> {
        // gotta come and change the validate code for the database here
        const user = await this.usersService.findOne(username);
        // console.log(user);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userid };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
