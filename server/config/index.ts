import { readFileSync, readdirSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const configDirectory = join(__dirname);
const env = process.env.DEPLOY_ENV || 'dev';

export interface IConfigs {
  mysql: {
    database: string;
    host: string;
    port: number;
    username: string;
    password: string;
  };
  redis: { host: string; port: number };
}

const loadConfig = () => {
  const allConfigs = readdirSync(configDirectory)
    .filter((file) => file.endsWith('.yaml') || file.endsWith('.yml'))
    .reduce((acc, file) => {
      const filePath = join(configDirectory, file);
      const moduleName = file.split('.')[0];
      const fileContents = readFileSync(filePath, 'utf8');
      const moduleConfig = yaml.load(fileContents) as Record<string, any>;
      return {
        ...acc,
        [moduleName]:
          moduleConfig?.[moduleName]?.[env] || moduleConfig?.[moduleName] || {},
      };
    }, {} as Record<string, any>);
  return allConfigs as IConfigs;
};

const CONFIG = loadConfig();
export { CONFIG, loadConfig };
