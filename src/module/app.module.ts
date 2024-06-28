import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { InternalAccountModule } from '../internal/account.module';
import { RedisModule } from '../config/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RedisModule,
    AuthModule,
    InternalAccountModule,
  ],
})
export class AppModule {}
