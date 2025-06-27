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
router.get('/posts/id/:id', getPostById);
router.get('/posts/publisherName/:publisherName', getPostsByPublisherName);
router.get('/posts/date/:date', getPostsByPublisDate);
router.get('/posts/likes/:likes', getPostsByNumberLikes);
router.get('/posts/content/:content', getPostsByContent);

export default router;