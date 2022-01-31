import express from 'express';
import {spendingRoutes} from './spending.router';

const router = express.Router();

router.use('/spending',spendingRoutes);

export = router;
