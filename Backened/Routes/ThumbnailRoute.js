import express from'express'
import { deleteThumbnail, generateThumbnail } from '../Controller/ThumbnailController.js';
import { auth } from '../Middleware/auth.js';

const ThumbnailRouter=express.Router();
ThumbnailRouter.post('/generate',auth,generateThumbnail);
ThumbnailRouter.delete('/delete/:id',auth,deleteThumbnail)

export default ThumbnailRouter
