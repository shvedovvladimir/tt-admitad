import { ApiModelProperty } from '@nestjs/swagger';
import { CommonWithSizeAndUrl } from './common-with-size-and-url';

export class FixedDownSampled extends CommonWithSizeAndUrl {
    @ApiModelProperty()
    public readonly webp: string;

    @ApiModelProperty()
    public readonly webp_size: number;
}
