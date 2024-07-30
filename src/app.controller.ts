import {
  Controller,
  Get,
  Post,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { DeveloperDto, ProjectDto, UnitDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private authenticate(username: string, password: string) {
    if (!this.appService.validateCredentials(username, password)) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }

  // Developer endpoints
  @Get('developers')
  async getAllDevelopers(@Query('username') username: string, @Query('password') password: string) {
    this.authenticate(username, password);
    try {
      return await this.appService.getAllDevelopers();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('singleDeveloper')
  async createDeveloper(@Query('username') username: string, @Query('password') password: string, @Query('name') name: string, @Query('id') id: number) {
    this.authenticate(username, password);
    try {
      const developerDto = new DeveloperDto();
      developerDto.name = name;
      developerDto.id = id;
      return await this.appService.createDeveloper(developerDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('developers')
  async deleteDeveloper(@Query('username') username: string, @Query('password') password: string, @Query('id') id: number) {
    this.authenticate(username, password);
    try {
      return await this.appService.deleteDeveloper(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  // Project endpoints
  @Get('projects')
  async getAllProjects(@Query('username') username: string, @Query('password') password: string) {
    this.authenticate(username, password);
    try {
      return await this.appService.getAllProjects();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('project')
  async createProject(@Query('username') username: string, @Query('password') password: string, @Query('name') name: string) {
    this.authenticate(username, password);
    try {
      const projectDto = new ProjectDto();
      projectDto.name = name;
      return await this.appService.createProject(projectDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('projects')
  async deleteProject(@Query('username') username: string, @Query('password') password: string, @Query('id') id: number) {
    this.authenticate(username, password);
    try {
      return await this.appService.deleteProject(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  // Unit endpoints
  @Get('units')
  async getAllUnits(@Query('username') username: string, @Query('password') password: string) {
    this.authenticate(username, password);
    try {
      return await this.appService.getAllUnits();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('unit')
  async createUnit(@Query('username') username: string, @Query('password') password: string, @Query('bathrooms') bathrooms: number, @Query('bedrooms') bedrooms: number, @Query('area') area: number) {
    this.authenticate(username, password);
    try {
      const unitDto = new UnitDto();
      unitDto.bathrooms = bathrooms;
      unitDto.bedrooms = bedrooms;
      unitDto.area = area;
      return await this.appService.createUnit(unitDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('units')
  async deleteUnit(@Query('username') username: string, @Query('password') password: string, @Query('id') id: number) {
    this.authenticate(username, password);
    try {
      return await this.appService.deleteUnit(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
