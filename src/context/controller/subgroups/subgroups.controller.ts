import { SubgroupsService } from 'src/context/service';
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
  GetSubgroupsDto,
  GetSubgroupsListDto,
  PostSubgroupsDto,
} from 'src/view/dto';

@ApiTags('Subgroups')
@Controller('/Subgroups')
export class SubgroupsController {
  constructor(private readonly service: SubgroupsService) {}

  @ApiOperation({
    summary: 'Rota para criação de um subgrupo.',
  })
  @Post('/')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 201, description: 'Created.', type: PostSubgroupsDto })
  async postSubgroups(@Body() input: PostSubgroupsDto): Promise<void> {}

  @ApiOperation({
    summary: 'Rota para listagem de subgrupos.',
  })
  @Get('/search')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 200, description: 'Ok.', type: GetSubgroupsListDto })
  async getSubgroups(@Headers() input: GetSubgroupsDto): Promise<void> {}
}
