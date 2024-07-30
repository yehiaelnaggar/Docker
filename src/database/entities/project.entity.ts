import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Developer } from './developer.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne(() => Developer)
  developer: Developer;
}
