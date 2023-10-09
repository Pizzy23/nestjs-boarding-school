import { ClassesService } from 'src/context/service';
import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Classes')
@Controller('/Classes')
export class ClassesController {
  constructor(private readonly service: ClassesService) {}

  @ApiOperation({
    summary: '',
  })
  @Post('/')
  async postClasses(@Body() input: any): Promise<void> {}
}
