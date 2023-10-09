import { CiclesService } from 'src/context/service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Cicles')
@Controller('/Cicles')
export class CiclesController {
  constructor(private readonly service: CiclesService) {}

  @ApiOperation({
    summary: '',
  })
  @Post('/')
  async postCicles(@Body() input: any): Promise<void> {}
}
