import { Injectable } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

@Injectable()
export class PostSubgroupsDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  group_id: string;
}

export class GetSubgroupsDto {
  @ApiProperty()
  @IsString()
  query: string;

  @ApiPropertyOptional()
  @IsNumber()
  page: number;
}

export class GetSubgroupsListDto {
  @ApiProperty()
  @IsArray()
  subgroups: PostSubgroupsDto[];
}
