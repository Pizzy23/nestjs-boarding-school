import { UsersService } from 'src/context/service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('/Users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @ApiOperation({
    summary: '',
  })
  @Post('/')
  async postUsers(@Body() input: any): Promise<void> {}
}
