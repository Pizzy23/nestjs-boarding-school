
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../config';

@Injectable()
export class HospitalsEntity {
  constructor(private prisma: PrismaService) {}
  async Hospitals(input) {
    await this.prisma.user.create({
      data: input,
    });
  }
}