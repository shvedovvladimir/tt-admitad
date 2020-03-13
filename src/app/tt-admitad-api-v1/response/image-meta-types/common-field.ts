import { ApiModelProperty } from '@nestjs/swagger';

export class CommonField {
    @ApiModelProperty()
    public readonly height: number;

    @ApiModelProperty()
    public readonly width: number;
}
