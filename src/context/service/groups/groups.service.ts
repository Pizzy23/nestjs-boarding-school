import { GroupsEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class GroupsService {
  constructor(private repository: GroupsEntity) {}
  async Groups() {}
}
