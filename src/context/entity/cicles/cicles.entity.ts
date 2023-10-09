
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';

@Injectable()
export class CiclesEntity {
  constructor(private prisma: PrismaService) {}
  async Cicles(input) {
    await this.prisma.user.create({
      data: input,
    });
  }
}