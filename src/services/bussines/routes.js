import express from 'express';

import getController from './controllers/get.js';
import postController from './controllers/post.js';
import putController from './controllers/put.js';


const router = express.Router();

router
  .route('/bussines')
  .get(getController)
  .post(postController)
  .put(putController)


export default router