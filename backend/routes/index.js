import express from 'express';
import restaurantController from '../restaurants/controllers';
import multer from 'multer';
import cloudinary from 'cloudinary';
const storage = multer.memoryStorage();
const upload = multer({ storage });
import fileUploadMiddleware from '../fileUploadMiddleware';


const router = express.Router();

/* GET index page. */
router.get('/', restaurantController.getRestaurant);
router.get('/:id', restaurantController.getSpecificRestaurant);
router.post('/',restaurantController.postRestaurant);
router.put('/:id', restaurantController.updateRestaurant);
router.delete('/:id', restaurantController.deleteRestaurant);
router.post('/files/picHome', upload.single('picHome'),fileUploadMiddleware);
router.post('/files/picIndividual', upload.single('picIndividual'),fileUploadMiddleware);

export default router;
