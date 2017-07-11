import express from 'express';
import reviewController from '../reviews/controllers';
import multer from 'multer';
import cloudinary from 'cloudinary';
const upload = multer({ dest: './uploads/review' });

const router = express.Router();

/* GET index page. */
router.get('/', reviewController.getReview);
router.get('/:id', reviewController.getSpecificReview);
router.post('/:restaurant_id',upload.single('picReview'),reviewController.postReview);
router.put('/:id', upload.single('picReview'),reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

export default router;
