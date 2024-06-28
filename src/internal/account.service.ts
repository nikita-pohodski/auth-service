import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  GetUserResponse,
  GetUsersByFilterParams,
  VerificationParams,
} from './account.types';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class InternalAccountService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async verification(params: VerificationParams): Promise<boolean> {
    const url = `${this.config.get('ACCOUNT_URL')}/user/v1/verification`;
    const res = await this.httpService.axiosRef.get(url, { params });

    return res.data;
  }

  async getUserByFilter(
    params: GetUsersByFilterParams,
  ): Promise<GetUserResponse> {
    const url = `${this.config.get('ACCOUNT_URL')}/user`;
    const res = await this.httpService.axiosRef.get(url, { params });

    return res.data;
  }
}
