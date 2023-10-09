import { SubgroupsEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class SubgroupsService {
  constructor(private repository: SubgroupsEntity) {}
  async Subgroups() {}
}
