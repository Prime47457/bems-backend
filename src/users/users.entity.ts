import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    userid?: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    username: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    password: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    role: string;

} 