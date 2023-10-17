import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

@Injectable()
export class PostActivityImplementationDto {
  @ApiProperty()
  @IsString()
  activity_id: string;

  @ApiProperty()
  @IsDate()
  dataStart: Date;

  @ApiProperty()
  @IsDate()
  dataEnd: Date;

  @ApiProperty()
  @IsDate()
  hourStart: Date;

  @ApiProperty()
  @IsDate()
  hourEnd: Date;

  @ApiProperty()
  @IsString()
  user_id: string;

  @ApiProperty()
  @IsString()
  internship_id: string;

  @ApiProperty()
  @IsString()
  hospital_id: string;

  @ApiProperty()
  @IsString()
  hospitalArea_id: string;

  @ApiProperty()
  @IsString()
  preceptor_id: string;
}
