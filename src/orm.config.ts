import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'secret',
    database: 'postgres',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true
}