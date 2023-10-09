import { InternshipsService } from 'src/context/service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Internships')
@Controller('/Internships')
export class InternshipsController {
  constructor(private readonly service: InternshipsService) {}

  @ApiOperation({
    summary: '',
  })
  @Post('/')
  async postInternships(@Body() input: any): Promise<void> {}
}
