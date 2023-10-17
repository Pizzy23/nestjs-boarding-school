import { PeriodsService } from 'src/context/service';
import {
  Controller,
  Post,
  Get,
  Body,
  Headers,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';
import { GetPeriodsDto, GetPeriodsListDto, PostPeriodsDto } from 'src/view/dto';

@ApiTags('Periods')
@Controller('/Periods')
export class PeriodsController {
  constructor(private readonly service: PeriodsService) {}

  @ApiOperation({
    summary: 'Rota para criação de um período.',
  })
  @Post('/')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 201, description: 'Created.', type: PostPeriodsDto })
  async postPeriods(@Body() input: PostPeriodsDto): Promise<void> {}

  @ApiOperation({
    summary: 'Rota para listagem de períodos.',
  })
  @Get('/search')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 200, description: 'Ok.', type: GetPeriodsListDto })
  async getPeriods(@Headers() input: GetPeriodsDto): Promise<void> {}
}
