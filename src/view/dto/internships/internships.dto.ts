import { Injectable } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

@Injectable()
export class PostInternshipsDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  hospital_id: string;

  @ApiProperty()
  @IsString()
  cicle_id: string;

  @ApiProperty()
  @IsString()
  hospitalArea_id: string;

  @ApiProperty()
  @IsString()
  preceptor_id: string;

  @ApiProperty()
  @IsString()
  period_id: string;

  @ApiProperty()
  @IsString()
  user_id: string;
}

export class GetInternshipsDto {
  @ApiProperty()
  @IsString()
  query: string;

  @ApiPropertyOptional()
  @IsNumber()
  page: number;
}

export class GetInternshipsListDto {
  @ApiProperty()
  @IsArray()
  internships: PostInternshipsDto[];
}
