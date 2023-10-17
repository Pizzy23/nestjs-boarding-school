import { ActivitiesService } from 'src/context/service';
import {
  Controller,
  Post,
  Body,
  Get,
  Headers,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import {
  GetActivitiesDto,
  GetActivitiesListDto,
  PostActivitiesDto,
} from 'src/view/dto';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';

@ApiTags('Activities')
@Controller('/Activities')
export class ActivitiesController {
  constructor(private readonly service: ActivitiesService) {}

  @ApiOperation({
    summary: 'Rota para criação de uma atividade.',
  })
  @Post('/')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({
    status: 201,
    description: 'Created.',
    type: PostActivitiesDto,
  })
  async postActivities(@Body() input: PostActivitiesDto): Promise<void> {}

  @ApiOperation({
    summary: 'Rota para listagem de atividades.',
  })
  @Get('/search')
  @ApiResponse({ status: 200, description: 'Ok.', type: GetActivitiesListDto })
  async getActivities(@Headers() input: GetActivitiesDto): Promise<void> {}
}
