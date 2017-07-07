import express from 'express';
import restaurentController from '../restaurents/controllers';

const router = express.Router();

/* GET index page. */
router.get('/', restaurentController.getRestaurent);
router.get('/:id', restaurentController.getSpecificRestaurent);
router.post('/', restaurentController.postRestaurent);
router.put('/:id', restaurentController.updateRestaurent);
router.delete('/:id', restaurentController.deleteRestaurent);

export default router;
