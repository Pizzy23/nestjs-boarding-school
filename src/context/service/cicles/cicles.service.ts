import { CiclesEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class CiclesService {
  constructor(private repository: CiclesEntity) {}
  async Cicles() {}
}
