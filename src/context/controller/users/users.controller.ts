import { UsersService } from 'src/context/service';
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
import {
  GetUsersDto,
  GetUsersListDto,
  PostSessionsDto,
  PostUsersDto,
} from 'src/view/dto';

@ApiTags('Users')
@Controller('/Users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @ApiOperation({
    summary: 'Rota para criação de um usuário.',
  })
  @Post('/')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 201, description: 'Created.', type: PostUsersDto })
  async postUsers(@Body() input: PostUsersDto): Promise<void> {}

  @ApiOperation({
    summary: 'Rota para autenticação de um usuário.',
  })
  @Post('/sessions')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 201, description: 'Created.', type: PostSessionsDto })
  async postSession(@Body() input: PostUsersDto): Promise<void> {}

  @ApiOperation({
    summary: 'Rota para listagem de usuários.',
  })
  @Get('/search')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 200, description: 'Ok.', type: GetUsersListDto })
  async getUsers(@Headers() input: GetUsersDto): Promise<void> {}

  @ApiOperation({
    summary: 'Rota para listagem de usuários.',
  })
  @Get('/search-preceptors')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 200, description: 'Ok.', type: GetUsersListDto })
  async getPreceptors(@Headers() input: GetUsersDto): Promise<void> {}
}
