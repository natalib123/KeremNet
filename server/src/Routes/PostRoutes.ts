import { Router } from 'express';

import { getPosts, 
        getPostById, 
        getPostByPublisherName,
        getPostByPublisDate,
        getPostByNumberLikes,
        getPostByContent
} from '../Controllers/postController'

const router: Router = Router()

router.get('/post/', getPosts);
router.get('/post/:id', getPostById);
router.get('/post/:publisherName', getPostByPublisherName);
router.get('/post/:date', getPostByPublisDate);
router.get('/post/:likes', getPostByNumberLikes);
router.get('/post/:content', getPostByContent);

export default router;