import { HospitalsService } from 'src/context/service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Hospitals')
@Controller('/Hospitals')
export class HospitalsController {
  constructor(private readonly service: HospitalsService) {}

  @ApiOperation({
    summary: '',
  })
  @Post('/')
  async postHospitals(@Body() input: any): Promise<void> {}
}
