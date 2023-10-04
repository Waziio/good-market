import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import { config } from 'src/app.module';

export function generateJwt(
  id: string,
  email: string,
  username: string,
): string {
  const sign = {
    id: id,
    email: email,
    username: username,
  };

  return jwt.sign(sign, config.get('SECRET_KEY'), {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
}

export function verifyJwt(token: string): boolean {
  let isValidJwt: boolean;
  jwt.verify(
    token,
    config.get('SECRET_KEY'),
    { algorithms: ['HS256'] },
    (err) => {
      if (err) {
        isValidJwt = false;
      } else {
        isValidJwt = true;
      }
    },
  ) ;
  return isValidJwt;
}

export function decodeJwt(token: string) {
  return jwt.decode(token);
}
