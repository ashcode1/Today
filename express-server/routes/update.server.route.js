// ./express-server/routes/update.server.route.js
import express from 'express';

import * as updateController from '../controllers/update.server.controller';

const router = express.Router();

router.route('/')
     .get(updateController.getUpdates)
     .post(updateController.addUpdate)
     .put(updateController.updateUpdate);

router.route('/tags/:tag')
      .get(updateController.getUpdatesByTag);

router.route('/tags')
     .get(updateController.getTags);

router.route('/:id')
      .get(updateController.getUpdate)
      .delete(updateController.deleteUpdate);

export default router;
