
import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

@Injectable()
export class SubgroupsDto {
  @ApiProperty()
  @IsString()
  exemple: string;
}