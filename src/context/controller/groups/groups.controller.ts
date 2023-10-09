import { GroupsService } from 'src/context/service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Groups')
@Controller('/Groups')
export class GroupsController {
  constructor(private readonly service: GroupsService) {}

  @ApiOperation({
    summary: '',
  })
  @Post('/')
  async postGroups(@Body() input: any): Promise<void> {}
}
