import express from 'express';
import { spendingRoutes } from './spending.router';
import { usersRoutes } from './users.router';

const router = express.Router();

router.use('/spending', spendingRoutes);
router.use('/users', usersRoutes);

export = router;
