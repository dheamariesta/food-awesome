import express from 'express';
import reviewController from '../reviews/controllers';
import multer from 'multer';
import cloudinary from 'cloudinary';
const upload = multer({ dest: './uploads/review' });

const router = express.Router();

/* GET index page. */
router.get('/',reviewController.getAllReview);
router.get('/:restaurant_id', reviewController.getReview);
router.get('/userReviews/:user_id', reviewController.getUserReview);
router.post('/postReviewWithPic/:restaurant_id',upload.single('picReview'),reviewController.postReviewWithPic);
router.post('/postReviewWithoutPic/:restaurant_id',reviewController.postReviewWithoutPic);
router.put('/updateReviewWithPic/:id', upload.single('picReview'),reviewController.updateReviewWithPic);
router.put('/updateReviewWithoutPic/:id', reviewController.updateReviewWithoutPic);
router.delete('/deleteReview/:id', reviewController.deleteReview);

export default router;
