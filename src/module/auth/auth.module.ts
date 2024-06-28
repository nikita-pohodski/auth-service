import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { InternalAccountModule } from '../../internal/account.module';
import { RedisModule } from '../../config/redis/redis.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [JwtModule, InternalAccountModule, RedisModule, ConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
