import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', `warn`, `error`]
});
// import blogModel from '../models/blog';

const getUsers = async (req: Request, res: Response) => {
  const total = await prisma.users.count({});
  console.log('🚀 ~ getUser ~ total', total);
  res.status(200).json(total);
};

export { getUsers };
