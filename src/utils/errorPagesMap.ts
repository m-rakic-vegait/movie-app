import { ErrorPageCodes } from '../interfaces';

const errorPagesMap: ErrorPageCodes = {
    '400': 'Bad request!',
    '403': 'Forbidden! No permissions for this page.',
    '404': 'Not found! Requested entity does not exist.',
    '500': 'Unknown error!'
};

export default errorPagesMap;