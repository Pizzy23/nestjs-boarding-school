import { GroupsService } from 'src/context/service';
import {
  Controller,
  Post,
  Body,
  Headers,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SuccessInterceptor } from 'src/config/interceptor/sucess-interceptor';
import { GetGroupsDto, PostGroupsDto } from 'src/view/dto';

@ApiTags('Groups')
@Controller('/Groups')
export class GroupsController {
  constructor(private readonly service: GroupsService) {}

  @ApiOperation({
    summary: 'Rota para criação de um grupo.',
  })
  @Post('/')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 201, description: 'Created.', type: PostGroupsDto })
  async postGroups(@Body() input: PostGroupsDto): Promise<void> {}

  @ApiOperation({
    summary: 'Rota para listagem de grupos.',
  })
  @Get('/search')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 200, description: 'Ok.', type: GetGroupsDto })
  async getGroups(@Headers() input: GetGroupsDto): Promise<void> {}
}
