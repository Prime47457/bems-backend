import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';


// export type User = any;

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }
    // KQ)BW%&(ED7Jn7C

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(username: string): Promise<User> {
        return this.userRepository.findOne({ username: username });
    }

}