import { ApiModelProperty } from '@nestjs/swagger';
import { ImageMeta } from './image-meta.response';

export class ImageListResponse {
    @ApiModelProperty()
    public readonly image_id: string;

    @ApiModelProperty()
    public readonly type: string;

    @ApiModelProperty()
    public readonly title: string;

    @ApiModelProperty()
    public readonly image_url: string;

    @ApiModelProperty()
    public readonly images: ImageMeta;

    @ApiModelProperty({format: 'date-time'})
    public readonly created_at: string;
}
