import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class GetHelloDto {
  @ApiProperty({
    title: 'id',
  })
  @IsString()
  @IsNumberString()
  id: string;

  @ApiPropertyOptional({
    title: 'name',
    default: 'test name',
  })
  @IsString()
  @IsOptional()
  name?: string;
}
