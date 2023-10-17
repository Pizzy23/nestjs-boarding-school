import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';

@Injectable()
export class ActivitiesEntity {
  constructor(private prisma: PrismaService) {}
  async Activities(input) {
    await this.prisma.user.create({
      data: input,
    });
  }
}
