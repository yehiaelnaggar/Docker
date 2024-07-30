import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

 
}
