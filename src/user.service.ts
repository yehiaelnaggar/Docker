import { Injectable } from '@nestjs/common';
import { Admin } from 'src/database/entities/admin.entity';

@Injectable()
export class UsersService {
  private readonly users: Admin[] = [
    {
      id:1,
      username: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'chris',
      password: 'secret',
    },
    {
      id: 3,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<Admin | undefined> {
    return this.users.find(user => user.username === username);
  }
}
