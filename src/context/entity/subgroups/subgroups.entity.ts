
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';

@Injectable()
export class SubgroupsEntity {
  constructor(private prisma: PrismaService) {}
  async Subgroups(input) {
    await this.prisma.user.create({
      data: input,
    });
  }
}