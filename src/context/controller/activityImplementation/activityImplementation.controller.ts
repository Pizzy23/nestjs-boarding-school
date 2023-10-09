import { ActivityImplementationService } from 'src/context/service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('ActivityImplementation')
@Controller('/ActivityImplementation')
export class ActivityImplementationController {
  constructor(private readonly service: ActivityImplementationService) {}

  @ApiOperation({
    summary: '',
  })
  @Post('/')
  async postActivityImplementation(@Body() input: any): Promise<void> {}
}
