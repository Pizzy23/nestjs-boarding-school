import { ClassesService } from 'src/context/service';
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
import { GetClassesDto, GetClassesListDto, PostClassesDto } from 'src/view/dto';

@ApiTags('Classes')
@Controller('/Classes')
export class ClassesController {
  constructor(private readonly service: ClassesService) {}

  @ApiOperation({
    summary: 'Rota para criação de uma turma.',
  })
  @Post('/')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 201, description: 'Created.', type: PostClassesDto })
  async postClasses(@Body() input: PostClassesDto): Promise<void> {}

  @ApiOperation({
    summary: 'Rota para listagem de turmas.',
  })
  @Get('/search')
  @UseInterceptors(SuccessInterceptor)
  @ApiResponse({ status: 200, description: 'Ok.', type: GetClassesListDto })
  async getClasses(@Headers() input: GetClassesDto): Promise<void> {}
}
