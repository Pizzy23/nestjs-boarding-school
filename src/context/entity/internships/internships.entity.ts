
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';

@Injectable()
export class InternshipsEntity {
  constructor(private prisma: PrismaService) {}
  async Internships(input) {
    await this.prisma.user.create({
      data: input,
    });
  }
}