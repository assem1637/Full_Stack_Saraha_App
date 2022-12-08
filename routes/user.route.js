import { Router } from 'express';
import { User } from '../controllers/user.controller.js'



const router = Router();

router.get('/user/:id', User);


export default router;