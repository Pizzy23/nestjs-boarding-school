import { HospitalsService } from 'src/context/service';
import {
  Controller,
  Post,
  Body,
  Headers,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';
import { GetHospitalsDto, PostHospitalsDto } from 'src/view/dto';

@ApiTags('Hospitals')
@Controller('/Hospitals')
export class HospitalsController {
  constructor(private readonly service: HospitalsService) {}

  @ApiOperation({
    summary: 'Rota para criação de um hospital.',
  })
  @Post('/')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 201, description: 'Created.', type: PostHospitalsDto })
  async postHospitals(@Body() input: PostHospitalsDto): Promise<void> {}

  @ApiOperation({
    summary: 'Rota para listagem de hospitais.',
  })
  @Get('/search')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 200, description: 'Ok.', type: GetHospitalsDto })
  async getHospitals(@Headers() input: GetHospitalsDto): Promise<void> {}
}
