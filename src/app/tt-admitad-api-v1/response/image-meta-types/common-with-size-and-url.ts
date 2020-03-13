import { ApiModelProperty } from '@nestjs/swagger';
import { CommonField } from './common-field';

export class CommonWithSizeAndUrl extends CommonField {
    @ApiModelProperty()
    public readonly size: number;

    @ApiModelProperty()
    public readonly url: string;
}
