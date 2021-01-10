import { Injectable } from '@nestjs/common';


export type User = any;

@Injectable()
export class UsersService {

    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
            roles: 'user',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
            roles: 'admin',
        },
        // KQ)BW%&(ED7Jn7C
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}