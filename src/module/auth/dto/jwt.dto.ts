import { ApiProperty } from '@nestjs/swagger';

export class JwtDto {
  @ApiProperty({
    description: 'access JWT',
    type: String,
    required: true,
  })
  readonly access: string;

  @ApiProperty({
    description: 'refresh JWT',
    type: String,
    required: true,
  })
  readonly refresh: string;
}

export class RefreshJwtDto {
  @ApiProperty({
    description: 'refresh JWT',
    type: String,
    required: true,
  })
  readonly refresh: string;
}
