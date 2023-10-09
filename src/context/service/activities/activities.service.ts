import { ActivitiesEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class ActivitiesService {
  constructor(private repository: ActivitiesEntity) {}
  async Activities() {}
}
