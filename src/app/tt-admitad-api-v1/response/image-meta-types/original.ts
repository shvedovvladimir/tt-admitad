import { ApiModelProperty } from '@nestjs/swagger';
import { CommonField } from './common-field';

export class Original extends CommonField {
    @ApiModelProperty()
    public readonly size: number;

    @ApiModelProperty()
    public readonly url: string;

    @ApiModelProperty()
    public readonly frames: number;

    @ApiModelProperty()
    public readonly hash: string;

    @ApiModelProperty()
    public readonly mp4: string;

    @ApiModelProperty()
    public readonly mp4_size: number;

    @ApiModelProperty()
    public readonly webp: string;

    @ApiModelProperty()
    public readonly webp_size: number;
}
