import { Router } from 'express';
import { Messages, handleMessage } from '../controllers/messages.controller.js'



const router = Router();

router.get('/messages', Messages);
router.post('/handleMessage/:id', handleMessage)

export default router;