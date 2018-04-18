// ./express-server/routes/update.server.route.js
import express from 'express';

//import controller file
import * as updateController from '../controllers/update.server.controller';
import * as userController from '../controllers/user.server.controller';

// get an instance of express router
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

// router.route(/users)
//       .get(userController.getUsers)      
// router.route('/users/signup')
//       .post(userController.singUp);
// router.route('/users/signin')
//       .post(userController.signIn);


export default router;
