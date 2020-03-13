import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class LimitOffsetDto {
    @ApiModelProperty()
    public readonly limit: number;

    @ApiModelProperty()
    public readonly offset: number;

    @ApiModelPropertyOptional()
    public readonly dateFrom?: Date;

    @ApiModelPropertyOptional()
    public readonly dateTo?: Date;
}