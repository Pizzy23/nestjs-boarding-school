import { Injectable } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

@Injectable()
export class PostGroupsDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  class_id: string;
}

export class GetGroupsDto {
  @ApiProperty()
  @IsString()
  query: string;

  @ApiPropertyOptional()
  @IsNumber()
  page: number;
}

export class GetGroupsListDto {
  @ApiProperty()
  @IsArray()
  groups: PostGroupsDto[];
}
