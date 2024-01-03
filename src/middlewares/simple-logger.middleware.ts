import { NextFunction, Request, Response } from 'express';

export default function SimpleMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('Incoming... ');
  next();
}
