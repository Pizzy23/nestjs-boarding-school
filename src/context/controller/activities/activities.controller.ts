import { ActivitiesService } from 'src/context/service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Activities')
@Controller('/Activities')
export class ActivitiesController {
  constructor(private readonly service: ActivitiesService) {}

  @ApiOperation({
    summary: '',
  })
  @Post('/')
  async postActivities(@Body() input: any): Promise<void> {}
}
