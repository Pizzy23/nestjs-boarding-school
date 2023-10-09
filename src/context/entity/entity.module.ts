import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config';
import {
  ActivitiesEntity,
  ActivityImplementationEntity,
  CiclesEntity,
  ClassesEntity,
  GroupsEntity,
  HospitalsEntity,
  InternshipsEntity,
  PeriodsEntity,
  SubgroupsEntity,
  UsersEntity,
} from '.';

@Module({
  exports: [
    PrismaService,
    ActivitiesEntity,
    ActivityImplementationEntity,
    CiclesEntity,
    ClassesEntity,
    GroupsEntity,
    HospitalsEntity,
    InternshipsEntity,
    PeriodsEntity,
    SubgroupsEntity,
    UsersEntity,
  ],
  providers: [
    PrismaService,
    ActivitiesEntity,
    ActivityImplementationEntity,
    CiclesEntity,
    ClassesEntity,
    GroupsEntity,
    HospitalsEntity,
    InternshipsEntity,
    PeriodsEntity,
    SubgroupsEntity,
    UsersEntity,
  ],
})
export class EntityModule {}
