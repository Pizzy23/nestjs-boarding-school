import { InternshipsService } from 'src/context/service';
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
import {
  GetInternshipsDto,
  GetInternshipsListDto,
  PostInternshipsDto,
} from 'src/view/dto';

@ApiTags('Internships')
@Controller('/Internships')
export class InternshipsController {
  constructor(private readonly service: InternshipsService) {}

  @ApiOperation({
    summary: 'Rota para criação de um estágio.',
  })
  @Post('/')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({
    status: 201,
    description: 'Created.',
    type: PostInternshipsDto,
  })
  async postInternships(@Body() input: PostInternshipsDto): Promise<void> {}

  @ApiOperation({
    summary: 'Rota para listagem de estágios.',
  })
  @Get('/search')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 200, description: 'Ok.', type: GetInternshipsListDto })
  async getInternships(@Headers() input: GetInternshipsDto): Promise<void> {}
}
