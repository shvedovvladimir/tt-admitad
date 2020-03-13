import { joiExtended } from '../../common/extensions/joi/extended-string.extension';

export const getByIdSchema = joiExtended.object({
    id: joiExtended.number().min(0).max(Number.MAX_SAFE_INTEGER).required(),
});