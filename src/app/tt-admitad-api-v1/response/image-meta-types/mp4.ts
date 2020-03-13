import { ApiModelProperty } from '@nestjs/swagger';
import { CommonField } from './common-field';

export class Mp4 extends CommonField {
    @ApiModelProperty()
    public readonly mp4_size: number;

    @ApiModelProperty()
    public readonly mp4: string;
}
