import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { HttpService } from './http.service';
import { ApiTags } from '@nestjs/swagger';
import { GetHelloDto } from './dto/get-hello.dto';
import { PostHelloDto } from './dto/post-hello.dto';

@ApiTags('test')
@Controller('test')
export class HttpController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  getHello(@Query() query: GetHelloDto): string {
    return this.httpService.getHello(query);
  }

  @Post()
  postHello(@Body() body: PostHelloDto): string {
    return this.httpService.postHello(body);
  }

  @Put()
  putHello(): string {
    return this.httpService.baseHello();
  }

  @Delete()
  deleteHello(): string {
    return this.httpService.baseHello();
  }
}
