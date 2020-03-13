export interface IImageService {
    saveAndGetImage(): Promise<IImageDb>;
    getImageById(id: number): Promise<IImageDb>;
    getImages(limit: number, offset: number, dataFrom?: Date, dataTo?: Date): Promise<IImageDb[]>;
}

export interface IImageDb {
    imageId: number;
    type: string;
    title: string;
    imageUrl: string;
    images: IImageMeta;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}

export interface IResponseFromApi {
    data: IImage;
}

export interface IImage {
    image_id: string;
    type: string;
    title: string;
    image_url: string;
    images: IImageMeta;
    created_at: DataCue;
}

export interface IImageMeta {
    downsized_large: {
      height: number,
      size: number,
      url: string,
      width: number,
    };
    fixed_height_small_still: {
      height: number,
      size: number,
      url: string,
      width: number,
    };
    original: {
      frames: number,
      hash: string,
      height: number,
      mp4: string,
      mp4_size: number,
      size: number,
      url: string,
      webp: string,
      webp_size: number,
      width: number,
    };
    fixed_height_downsampled: {
      height: number;
      size: number;
      url: string
      webp: string,
      webp_size: number;
      width: number;
    };
    downsized_still: {
      height: number,
      size: number,
      url: string,
      width: number,
    };
    fixed_height_still: {
      height: number,
      size: number,
      url: string,
      width: number,
    };
    downsized_medium: {
      height: number,
      size: number,
      url: string,
      width: number,
    };
    downsized: {
      height: number,
      size: number,
      url: string,
      width: number,
    };
    preview_webp: {
      height: number,
      size: number,
      url: string,
      width: number,
    };
    original_mp4: {
      height: number,
      mp4: string,
      mp4_size: number,
      width: number,
    };
    fixed_height_small: {
      height: number,
      mp4: string,
      mp4_size: number,
      size: number,
      url: string,
      webp: string,
      webp_size: number,
      width: number,
    };
    fixed_height: {
      height: number,
      mp4: string,
      mp4_size: number,
      size: number,
      url: string,
      webp: string,
      webp_size: number,
      width: number,
    };
    downsized_small: {
      height: number,
      mp4: string,
      mp4_size: number,
      width: number,
    };
    preview: {
      height: number,
      mp4: string,
      mp4_size: number,
      width: number,
    };
    fixed_width_downsampled: {
      height: number,
      size: number,
      url: string,
      webp: string,
      webp_size: number,
      width: number,
    };
    fixed_width_small_still: {
      height: number,
      size: number,
      url: string,
      width: number,
    };
    fixed_width_small: {
      height: number,
      mp4: string,
      mp4_size: number,
      size: number,
      url: string,
      webp: string,
      webp_size: number,
      width: number,
    };
    original_still: {
      height: number,
      size: number,
      url: string,
      width: number,
    };
    fixed_width_still: {
      height: number,
      size: number,
      url: string,
      width: number,
    };
    looping: {
      mp4: string,
      mp4_size: number,
    };
    fixed_width: {
      height: number,
      mp4: string,
      mp4_size: number,
      size: number,
      url: string,
      webp: string,
      webp_size: number,
      width: number,
    };
    preview_gif: {
      height: number,
      size: number,
      url: string,
      width: number,
    };
    '480w_still': {
      url: string,
      width: number,
      height: number,
    };
}
