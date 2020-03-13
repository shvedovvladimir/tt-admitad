import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { IImageMeta } from '../../services/image-service/image.service.interface';

@Entity({
    name: 'image_data',
})
export class ImageEntity {
    @PrimaryColumn({
        name: 'image_id',
    })
    public imageId: number;

    @Column({
        name: 'type',
    })
    public type: string;

    @Column({
        name: 'title',
    })
    public title: string;

    @Column({
        name: 'image_url',
    })
    public imageUrl: string;

    @Column('jsonb', {
        nullable: true,
        name: 'images',
    })
    public images: IImageMeta;

    @CreateDateColumn({
        name: 'created_at',
    })
    public createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    public updatedAt: Date;

    @Column('timestamp', {
        nullable: true,
        name: 'deleted_at',
    })
    public deletedAt: Date | null;
}
