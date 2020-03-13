import { ApiModelProperty } from '@nestjs/swagger';

export class GetByIdDto {
    @ApiModelProperty()
    public readonly id: number;
}