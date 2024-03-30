import { Module } from '@nestjs/common';
import { HttpModule } from '@/server/modules/http/http.module';
import { ConfigModule } from '@app/config';
import { loadConfig } from '../config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot({ load: loadConfig })],
  controllers: [],
  providers: [],
})
export class AppModule {}
