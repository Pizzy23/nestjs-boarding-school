import { InternshipsEntity } from 'src/context/entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class InternshipsService {
  constructor(private repository: InternshipsEntity) {}
  async Internships() {}
}
