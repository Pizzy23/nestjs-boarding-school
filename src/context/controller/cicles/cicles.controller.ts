import { CiclesService } from 'src/context/service';
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
import { GetCiclesDto, GetCiclesListDto, PostCiclesDto } from 'src/view/dto';

@ApiTags('Cicles')
@Controller('/Cicles')
export class CiclesController {
  constructor(private readonly service: CiclesService) {}

  @ApiOperation({
    summary: 'Rota para criação de um ciclo.',
  })
  @Post('/')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 201, description: 'Created.', type: PostCiclesDto })
  async postCicles(@Body() input: PostCiclesDto): Promise<void> {}

  @ApiOperation({
    summary: 'Rota para listagem de ciclos.',
  })
  @Get('/search')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 200, description: 'Ok.', type: GetCiclesListDto })
  async getCicles(@Headers() input: GetCiclesDto): Promise<void> {}
}
