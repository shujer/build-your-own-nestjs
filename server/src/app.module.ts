import { Module } from '@nestjs/common';
import { HttpModule } from './modules/http/http.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
