import { UsersEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class UsersService {
  constructor(private repository: UsersEntity) {}
  async Users() {}
}
