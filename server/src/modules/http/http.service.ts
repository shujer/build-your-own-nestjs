import { Injectable } from '@nestjs/common';
import { GetHelloDto } from './dto/get-hello.dto';
import { PostHelloDto } from './dto/post-hello.dto';
import { ConfigService } from '@app/config';

@Injectable()
export class HttpService {
  getHello(query: GetHelloDto): string {
    return `Hello World! id:${query.id}, name: ${query.name}`;
  }
  postHello(body: PostHelloDto): string {
    return `Hello World! id:${body.id}, name: ${body.name}`;
  }
  baseHello(): string {
    return `Hello World!`;
  }
}
