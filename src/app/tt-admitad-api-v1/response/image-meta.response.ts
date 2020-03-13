import { ApiModelProperty } from '@nestjs/swagger';
import { CommonWithSizeAndUrl } from './image-meta-types/common-with-size-and-url';
import { Original } from './image-meta-types/original';
import { Mp4 } from './image-meta-types/mp4';
import { Fixed } from './image-meta-types/fixed';
import { FixedDownSampled } from './image-meta-types/fixed-downsampled';
import { WStill480 } from './image-meta-types/480w-still';

export class ImageMeta {
    @ApiModelProperty()
    public readonly downsized_large: CommonWithSizeAndUrl;

    @ApiModelProperty()
    public readonly fixed_height_small_still: CommonWithSizeAndUrl;

    @ApiModelProperty()
    public readonly original: Original;

    @ApiModelProperty()
    public readonly fixed_height_downsampled: FixedDownSampled;

    @ApiModelProperty()
    public readonly downsized_still: CommonWithSizeAndUrl;

    @ApiModelProperty()
    public readonly fixed_height_still: CommonWithSizeAndUrl;

    @ApiModelProperty()
    public readonly downsized_medium: CommonWithSizeAndUrl;

    @ApiModelProperty()
    public readonly downsized: CommonWithSizeAndUrl;

    @ApiModelProperty()
    public readonly preview_webp: CommonWithSizeAndUrl;

    @ApiModelProperty()
    public readonly original_mp4: Mp4;

    @ApiModelProperty()
    public readonly fixed_height_small: Fixed;

    @ApiModelProperty()
    public readonly fixed_height: Fixed;

    @ApiModelProperty()
    public readonly fixed_downsized_smallheight: Mp4;

    @ApiModelProperty()
    public readonly preview: Mp4;

    @ApiModelProperty()
    public readonly fixed_width_downsampled: FixedDownSampled;

    @ApiModelProperty()
    public readonly fixed_width_small_still: FixedDownSampled;

    @ApiModelProperty()
    public readonly fixed_width_small: Fixed;

    @ApiModelProperty()
    public readonly original_still: CommonWithSizeAndUrl;

    @ApiModelProperty()
    public readonly fixed_width_still: CommonWithSizeAndUrl;

    @ApiModelProperty()
    public readonly looping: Mp4;

    @ApiModelProperty()
    public readonly fixed_width: Fixed;

    @ApiModelProperty()
    public readonly preview_gif: CommonWithSizeAndUrl;

    @ApiModelProperty()
    public readonly '480w_still': WStill480;
}
