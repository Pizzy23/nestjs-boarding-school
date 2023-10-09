import { PeriodsEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class PeriodsService {
  constructor(private repository: PeriodsEntity) {}
  async Periods() {}
}
