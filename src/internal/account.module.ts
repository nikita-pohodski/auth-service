import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { InternalAccountService } from './account.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [InternalAccountService],
  exports: [InternalAccountService],
})
export class InternalAccountModule {}
