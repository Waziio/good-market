import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { verifyJwt } from 'src/utils/utils';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    if (!verifyJwt(token)) {
      return res.status(401).json({ message: 'Unauthorized' });
    } else {
      next();
    }
  }
}
