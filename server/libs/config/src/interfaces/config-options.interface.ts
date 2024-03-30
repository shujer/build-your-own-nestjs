export interface ConfigModuleOptions {
  load: () => Record<string, any>;
}

export const CONFIG_MODULE_OPTIONS = 'CONFIG_MODULE_OPTIONS';
