import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bathrooms: number;
  @Column()
  bedrooms: number;
  @Column()
  area: number;

  @ManyToOne(() => Project)
  project: Project;
}
