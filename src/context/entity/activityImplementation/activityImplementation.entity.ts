
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';

@Injectable()
export class ActivityImplementationEntity {
  constructor(private prisma: PrismaService) {}
  async ActivityImplementation(input) {
    await this.prisma.user.create({
      data: input,
    });
  }
}