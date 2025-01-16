import express from 'express';
import newsControllers from '../app/controllers/NewsControllers.js';

const router = express.Router();

// Define routes
router.use('/:slug', newsControllers.show)
router.use('/', newsControllers.index);


export default router;
