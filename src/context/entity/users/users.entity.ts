
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';

@Injectable()
export class UsersEntity {
  constructor(private prisma: PrismaService) {}
  async Users(input) {
    await this.prisma.user.create({
      data: input,
    });
  }
}