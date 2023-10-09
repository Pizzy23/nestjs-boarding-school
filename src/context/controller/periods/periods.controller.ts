import { PeriodsService } from 'src/context/service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Periods')
@Controller('/Periods')
export class PeriodsController {
  constructor(private readonly service: PeriodsService) {}

  @ApiOperation({
    summary: '',
  })
  @Post('/')
  async postPeriods(@Body() input: any): Promise<void> {}
}
