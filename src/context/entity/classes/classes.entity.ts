
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';

@Injectable()
export class ClassesEntity {
  constructor(private prisma: PrismaService) {}
  async Classes(input) {
    await this.prisma.user.create({
      data: input,
    });
  }
}