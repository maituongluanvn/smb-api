import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', `warn`, `error`]
});
// import blogModel from '../models/blog';

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const total = await prisma.users.count({});
  console.log('🚀 ~ getUser ~ total', total);
};

export { getUser };
