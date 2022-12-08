import { Router } from 'express';
import { Home } from '../controllers/home.controller.js'



const router = Router();

router.get('/', Home);


export default router;