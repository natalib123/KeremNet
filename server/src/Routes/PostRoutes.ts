import { Router } from 'express';

import { getPosts, 
        getPostById, 
        getPostByPublisherName
} from '../Controllers/postController'

const router: Router = Router()

router.get('/post/', getPosts);
router.get('/post/:id', getPostById);
router.get('/post/:publisherName', getPostByPublisherName);

export default router;