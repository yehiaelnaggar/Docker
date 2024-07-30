export class DeveloperDto {
  name: string;
  id:number;
}

export class ProjectDto {
  name: string;
  developer_id: number;
}

export class UnitDto {
  bathrooms: number;
  bedrooms: number;
  area: number;
  project_id: number;
}
export class AdminDto{
  id:number;
  username:string;
  password:number
}
