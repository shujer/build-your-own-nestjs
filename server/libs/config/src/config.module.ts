import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import {
  CONFIG_MODULE_OPTIONS,
  ConfigModuleOptions,
} from './interfaces/config-options.interface';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {
  static forRoot(options: ConfigModuleOptions): DynamicModule {
    return {
      global: true,
      module: ConfigModule,
      providers: [
        {
          provide: CONFIG_MODULE_OPTIONS,
          useValue: options,
        },
      ],
      exports: [ConfigService],
    };
  }
}
