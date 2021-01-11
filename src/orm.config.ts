import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './users/users.entity';

export const ormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'secret',
    database: 'postgres',
    entities: [User],
    synchronize: true,
}