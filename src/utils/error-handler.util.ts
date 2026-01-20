import { HttpException, InternalServerErrorException } from '@nestjs/common';

export class ErrorHandler {
  constructor(error: any) {
    if (!error.statusCode) return new InternalServerErrorException(error);
    return new HttpException(error, error.statusCode);
  }
}
