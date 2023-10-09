import { Module } from '@nestjs/common';
import { EntityModule } from './entity/entity.module';
import {
  ActivitiesController,
  ActivityImplementationController,
  CiclesController,
  ClassesController,
  GroupsController,
  HospitalsController,
  InternshipsController,
  PeriodsController,
  SubgroupsController,
  UsersController,
} from './controller';
import {
  ActivitiesService,
  ActivityImplementationService,
  CiclesService,
  ClassesService,
  GroupsService,
  HospitalsService,
  InternshipsService,
  PeriodsService,
  SubgroupsService,
  UsersService,
} from './service';

@Module({
  imports: [EntityModule],
  controllers: [
    ActivitiesController,
    ActivityImplementationController,
    CiclesController,
    ClassesController,
    GroupsController,
    HospitalsController,
    InternshipsController,
    PeriodsController,
    SubgroupsController,
    UsersController,
  ],
  providers: [
    ActivitiesService,
    ActivityImplementationService,
    CiclesService,
    ClassesService,
    GroupsService,
    HospitalsService,
    InternshipsService,
    PeriodsService,
    SubgroupsService,
    UsersService,
  ],
})
export class ContextModule {}
