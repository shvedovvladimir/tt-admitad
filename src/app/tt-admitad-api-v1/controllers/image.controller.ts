import {
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Inject,
    Injectable,
    Get,
    Query,
    Param,
    Response,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { AbstractController } from '../../common/controller/abstract.controller';
import { CredentialsErrorResponse } from '../../common/response/credentials-error.response';
import { CommonErrorResponse } from '../../common/response/common-error.response';
import { DI_CONSTANTS } from '../di-constants';
import { JoiValidationPipe } from '../../common/pipes/joi-validation.pipe';
import { IImageService, IImage, IImageDb } from '../services/image-service/image.service.interface';
import { limitOffsetJoiSchema } from '../schemas/limit-offset.schemas';
import { getByIdSchema } from '../schemas/get-by-id.schemas';
import { GetByIdDto } from '../dto/get-by-id.dto';
import { LimitOffsetDto } from '../dto/limit-offset.dto';
import { ImageListResponse } from '../response/image-list.response';
import { Request as IRequest, Response as IResponse } from 'express';
import { ISenderService } from '../services/sender-service/sender.service.interface';
import { IHttpResult } from '../../common/interfaces/http-result.interface';
// import * as snakeCaseKeys from 'snakecase-keys';

@Controller('api')
@ApiUseTags('Image service api')
@Injectable()
export class ImageController extends AbstractController {

    constructor(
        @Inject(DI_CONSTANTS.IImageService)
        private readonly _imageService: IImageService,
        @Inject(DI_CONSTANTS.ISenderService)
        private readonly _senderService: ISenderService,
    ) {
        super();
    }

    @Post('image')
    @ApiOperation(
        {
            title: 'Get random image and save data to db',
        },
    )
    @ApiResponse({
        status: 200,
        type: Buffer,
    })
    @ApiResponse({
        status: 400,
        type: CredentialsErrorResponse,
    })
    @ApiResponse({
        status: 500,
        type: CommonErrorResponse,
    })
    @HttpCode(HttpStatus.OK)
    public async saveAndGetImage(
        @Response() response: IResponse,
    ): Promise<any> {
        const imgDataJson = await this._imageService.saveAndGetImage();
        await this._senderService.getFileAndSend(imgDataJson.imageUrl, response, imgDataJson);
    }

    @Get('image/:id')
    @ApiOperation(
        {
            title: 'Return image by id',
        },
    )
    @ApiResponse({
        status: 200,
        type: Buffer,
    })
    @ApiResponse({
        status: 400,
        type: CredentialsErrorResponse,
    })
    @ApiResponse({
        status: 500,
        type: CommonErrorResponse,
    })
    @HttpCode(HttpStatus.OK)
    public async getImageById(
        @Param(new JoiValidationPipe(getByIdSchema)) getByIdDto: GetByIdDto,
        @Response() response: IResponse,
    ): Promise<any> {
        const imgDataJson = await this._imageService
            .getImageById(getByIdDto.id);

        await this._senderService.getFileAndSend(imgDataJson.imageUrl, response, imgDataJson);
    }

    @Get('images')
    @ApiOperation(
        {
            title: 'Returns a list of info about images sorted by create date',
        },
    )
    @ApiResponse({
        status: 200,
        type: ImageListResponse,
        isArray: true,
    })
    @ApiResponse({
        status: 400,
        type: CredentialsErrorResponse,
    })
    @ApiResponse({
        status: 500,
        type: CommonErrorResponse,
    })
    @HttpCode(HttpStatus.OK)
    public async getImages(
        @Query(new JoiValidationPipe(limitOffsetJoiSchema)) limitOffsetDto: LimitOffsetDto,
    ): Promise<IHttpResult<IImage[]>> {
        const resp = await this._imageService
            .getImages(limitOffsetDto.limit, limitOffsetDto.offset, limitOffsetDto.dateFrom, limitOffsetDto.dateTo);

        return this._prepareSimpleHttpResult(resp);
    }
}