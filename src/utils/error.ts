import createError from 'http-errors';

export class Error {
  public static badRequest(msg?: string) {
    throw new createError.BadRequest(msg);
  }

  public static unauthorized(msg?: string) {
    throw new createError.Unauthorized(msg);
  }
}
