import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Developer } from 'src/database/entities/developer.entity';
import { DeveloperDto, ProjectDto, UnitDto } from './app.dto';
import { Project } from 'src/database/entities/project.entity';
import { Unit } from 'src/database/entities/unit.entity';
import { Admin } from 'src/database/entities/admin.entity';
import { AUTH_CONFIG } from './app.config';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Developer)
    private devRepo: Repository<Developer>,
    @InjectRepository(Project)
    private proRepo: Repository<Project>,
    @InjectRepository(Unit)
    private uniRepo: Repository<Unit>,
  ) {}

  validateCredentials(username: string, password: string): boolean {
    return (
      username === AUTH_CONFIG.username && password === AUTH_CONFIG.password
    );
  }

  // Developer services
  async getAllDevelopers(): Promise<Developer[]> {
    try {
      return await this.devRepo.find();
    } catch (error) {
      throw new Error('Error fetching developers');
    }
  }

  async createDeveloper(developerDto: DeveloperDto): Promise<Developer> {
    try {
      const developer = this.devRepo.create(developerDto);
      return await this.devRepo.save(developer);
    } catch (error) {
      throw new Error('Error creating developer');
    }
  }

  async deleteDeveloper(id: number): Promise<void> {
    const result = await this.devRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Developer with ID ${id} not found`);
    }
  }

  // Project services
  async getAllProjects(): Promise<Project[]> {
    try {
      return await this.proRepo.find({
        relations: ['developer'],
      });
    } catch (error) {
      throw new Error('Error fetching projects');
    }
  }

  async createProject(projectDto: ProjectDto): Promise<Project> {
    try {
      const project = this.proRepo.create(projectDto);
      return await this.proRepo.save(project);
    } catch (error) {
      throw new Error('Error creating project');
    }
  }

  async deleteProject(id: number): Promise<void> {
    const result = await this.proRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
  }

  // Unit services
  async getAllUnits(): Promise<Unit[]> {
    try {
      return await this.uniRepo.find();
    } catch (error) {
      throw new Error('Error fetching units');
    }
  }

  async createUnit(unitDto: UnitDto): Promise<Unit> {
    try {
      const unit = this.uniRepo.create(unitDto);
      return await this.uniRepo.save(unit);
    } catch (error) {
      throw new Error('Error creating unit');
    }
  }

  async deleteUnit(id: number): Promise<void> {
    const result = await this.uniRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Unit with ID ${id} not found`);
    }
  }
}
