import express from 'express';
import siteControllers from '../app/controllers/SiteControllers.js';

const router = express.Router();

// Define routes
router.use('/search', siteControllers.search)
router.use('/', siteControllers.index);


export default router;
