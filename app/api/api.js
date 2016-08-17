import express from 'express';
import articlesApi from './articles';
const router = express.Router();

router.use('/article',articlesApi);

export default router;
