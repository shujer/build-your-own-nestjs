import { Test, TestingModule } from '@nestjs/testing';
import { HttpController } from './http.controller';
import { HttpService } from './http.service';

describe('AppController', () => {
  let appController: HttpController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HttpController],
      providers: [HttpService],
    }).compile();
    appController = app.get<HttpController>(HttpController);
  });

  describe('http test', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
