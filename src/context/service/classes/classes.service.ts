import { ClassesEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class ClassesService {
  constructor(private repository: ClassesEntity) {}
  async Classes() {}
}
