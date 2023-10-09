
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';

@Injectable()
export class PeriodsEntity {
  constructor(private prisma: PrismaService) {}
  async Periods(input) {
    await this.prisma.user.create({
      data: input,
    });
  }
}