import express from 'express';
import restaurantController from '../restaurants/controllers';
import multer from 'multer';
import cloudinary from 'cloudinary';
const upload = multer({ dest: './uploads/' });

const router = express.Router();

/* GET index page. */
router.get('/', restaurantController.getRestaurant);
router.get('/:id', restaurantController.getSpecificRestaurant);
router.post('/',upload.single('picHome'),restaurantController.postRestaurant);
router.put('/:id', upload.single('picHome'),restaurantController.updateRestaurant);
router.delete('/:id', restaurantController.deleteRestaurant);

export default router;
