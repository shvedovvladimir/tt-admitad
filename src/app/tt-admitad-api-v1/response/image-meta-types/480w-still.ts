import { ApiModelProperty } from '@nestjs/swagger';
import { CommonField } from './common-field';

export class WStill480 extends CommonField {
    @ApiModelProperty()
    public readonly url: string;
}
