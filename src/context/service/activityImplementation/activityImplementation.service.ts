import { ActivityImplementationEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class ActivityImplementationService {
  constructor(private repository: ActivityImplementationEntity) {}
  async ActivityImplementation() {}
}
