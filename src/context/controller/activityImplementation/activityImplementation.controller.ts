import { ActivityImplementationService } from 'src/context/service';
import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';
import { PostActivityImplementationDto } from 'src/view/dto';

@ApiTags('ActivityImplementation')
@Controller('/ActivityImplementation')
export class ActivityImplementationController {
  constructor(private readonly service: ActivityImplementationService) {}

  @ApiOperation({
    summary: 'Rota para implementar uma atividade.',
  })
  @Post('/')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({
    status: 201,
    description: 'Created.',
    type: PostActivityImplementationDto,
  })
  async postActivityImplementation(
    @Body() input: PostActivityImplementationDto,
  ): Promise<void> {}
}
