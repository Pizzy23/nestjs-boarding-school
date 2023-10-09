import { HospitalsEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class HospitalsService {
  constructor(private repository: HospitalsEntity) {}
  async Hospitals() {}
}
