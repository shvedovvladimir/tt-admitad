import { ApiModelProperty } from '@nestjs/swagger';
import { CommonWithSizeAndUrl } from './common-with-size-and-url';

export class Fixed extends CommonWithSizeAndUrl {
    @ApiModelProperty()
    public readonly mp4: string;

    @ApiModelProperty()
    public readonly mp4_size: number;

    @ApiModelProperty()
    public readonly webp: string;

    @ApiModelProperty()
    public readonly webp_size: number;
}
