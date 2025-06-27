import { Router } from 'express';

import { getPosts, 
        getPostById, 
        getPostsByPublisherName,
        getPostsByPublisDate,
        getPostsByNumberLikes,
        getPostsByContent
} from '../Controllers/postController'

const router: Router = Router()

router.get('/posts/', getPosts);
router.get('/posts/:id', getPostById);
router.get('/posts/:publisherName', getPostsByPublisherName);
router.get('/posts/:date', getPostsByPublisDate);
router.get('/posts/:likes', getPostsByNumberLikes);
router.get('/posts/:content', getPostsByContent);

export default router;