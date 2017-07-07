import express from 'express';
import restaurantController from '../restaurants/controllers';

const router = express.Router();

/* GET index page. */
router.get('/', restaurantController.getRestaurant);
router.get('/:id', restaurantController.getSpecificRestaurant);
router.post('/', restaurantController.postRestaurant);
router.put('/:id', restaurantController.updateRestaurant);
router.delete('/:id', restaurantController.deleteRestaurant);

export default router;
