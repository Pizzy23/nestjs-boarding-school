import { SubgroupsService } from 'src/context/service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Subgroups')
@Controller('/Subgroups')
export class SubgroupsController {
  constructor(private readonly service: SubgroupsService) {}

  @ApiOperation({
    summary: '',
  })
  @Post('/')
  async postSubgroups(@Body() input: any): Promise<void> {}
}
