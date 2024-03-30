import { Inject, Injectable } from '@nestjs/common';
import {
  CONFIG_MODULE_OPTIONS,
  ConfigModuleOptions,
} from './interfaces/config-options.interface';

@Injectable()
export class ConfigService {
  configs: Record<string, any> = {};
  constructor(
    @Inject(CONFIG_MODULE_OPTIONS)
    private readonly options: ConfigModuleOptions,
  ) {
    this.configs = options.load();
  }
  getConfigs<T extends Record<string, any> = Record<string, any>>() {
    return this.configs as T;
  }
  get<T extends Record<string, any> = Record<string, any>>(key: keyof T) {
    return this.getConfigs<T>()[key];
  }
}
