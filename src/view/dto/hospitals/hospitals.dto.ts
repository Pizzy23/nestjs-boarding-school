import { Injectable } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsLatitude,
  IsLongitude,
  IsNumber,
  IsString,
} from 'class-validator';

@Injectable()
export class PostHospitalsDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsLatitude()
  latitude: number;

  @ApiProperty()
  @IsLongitude()
  longitude: number;
}

export class GetHospitalsDto {
  @ApiProperty()
  @IsString()
  query: string;

  @ApiPropertyOptional()
  @IsNumber()
  page: number;
}

export class GetHospitalsListDto {
  @ApiProperty()
  @IsArray()
  hospitals: PostHospitalsDto[];
}
