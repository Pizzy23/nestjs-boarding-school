import { Injectable } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

@Injectable()
export class PostCiclesDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;
}

export class GetCiclesDto {
  @ApiProperty()
  @IsString()
  query: string;

  @ApiPropertyOptional()
  @IsNumber()
  page: number;
}

export class GetCiclesListDto {
  @ApiProperty()
  @IsArray()
  cicles: PostCiclesDto[];
}
