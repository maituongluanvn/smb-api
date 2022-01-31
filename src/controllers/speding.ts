import { Request, Response, NextFunction } from 'express';
// import blogModel from '../models/blog';

const getBlog = async (req: Request, res: Response, next: NextFunction) => {
  //   const data = await blogModel.find({});
  //   return res.status(200).json({
  //     message: 'get data',
  //     data: data
  //   });
};

export { getBlog };
