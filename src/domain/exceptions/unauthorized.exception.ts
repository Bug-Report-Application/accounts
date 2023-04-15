import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedException extends HttpException {
  constructor(message?: string) {
    super(
      { statusCode: HttpStatus.UNAUTHORIZED, error: 'Unauthorized', message },
      HttpStatus.UNAUTHORIZED,
    );
  }
}