import { Injectable } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

@Injectable()
export class PostActivitiesDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;
}

export class GetActivitiesDto {
  @ApiProperty()
  @IsString()
  query: string;

  @ApiPropertyOptional()
  @IsNumber()
  page: number;
}

export class GetActivitiesListDto {
  @ApiProperty()
  @IsArray()
  activities: PostActivitiesDto[];
}
