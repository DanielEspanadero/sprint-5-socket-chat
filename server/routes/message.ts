import { Router } from 'express';
import { getPersonalConversation, getChannelConversation } from '../controllers/message';
import { validateToken } from '../middlewares/validate-jwt';

const router = Router();

router.get('/personal/:from', validateToken, getPersonalConversation);
router.get('/channel/:from', validateToken, getChannelConversation);

export default router;