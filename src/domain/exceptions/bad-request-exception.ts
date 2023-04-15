import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequestException extends HttpException {
  constructor(message?: string) {
    super(
      { statusCode: HttpStatus.BAD_REQUEST, error: 'Bad request', message },
      HttpStatus.BAD_REQUEST,
    );
  }
}