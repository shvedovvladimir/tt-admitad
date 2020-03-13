import { HttpStatus } from '@nestjs/common';
import { CommonError } from '../../common/errors/common';

export class NotFoundError extends CommonError {
    public static readonly CODE_DEFAULT: string = 'NOT_FOUND';

    public status: number = HttpStatus.NOT_FOUND;

    constructor(details: any) {
        super(
            null,
            NotFoundError.CODE_DEFAULT,
            null,
            details,
        );
    }
}