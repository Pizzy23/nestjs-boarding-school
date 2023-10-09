
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';

@Injectable()
export class GroupsEntity {
  constructor(private prisma: PrismaService) {}
  async Groups(input) {
    await this.prisma.user.create({
      data: input,
    });
  }
}