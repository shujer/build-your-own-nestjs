import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';
import { ConfigModule } from './config.module';
import { ConfigModuleOptions } from './interfaces/config-options.interface';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    const configOptions: ConfigModuleOptions = {
      load: () => ({
        mysql: {
          host: 'localhost',
          port: 3306,
        },
      }),
    };
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(configOptions)],
    }).compile();
    service = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be has config', () => {
    expect(service.get('mysql')).toHaveProperty('host');
  });
});
