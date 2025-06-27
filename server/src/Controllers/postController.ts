import { Request, Response, NextFunction } from 'express';
import { Post } from '../Model/Post';
import { findPostById, 
        findPostsByPublisherName,
        findPostsByPublishDate,
        findPostsByNumberLikes,
        findPostsByContent
} from '../Services/postFounder'

const DECIMAL_BASE: number = 10
const data: string = require('../mockDB/posts.json');

export const getPosts = (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts: Post[] = JSON.parse(data);
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

export const getPostById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: number = parseInt(req.params.id, DECIMAL_BASE);
    const posts: Post[] = JSON.parse(data);
    const post = findPostById(posts, id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};

export const getPostsByPublisherName = (req: Request, res: Response, next: NextFunction) => {
  try {
    const publisherName: string = req.params.publisherName;
    const posts: Post[] = JSON.parse(data);
    const postsWithPublisherName: Post[] = findPostsByPublisherName(posts, publisherName);
    if (postsWithPublisherName.length == 0) {
      res.status(404).json({ message: 'Posts not found' });
      return;
    }
    res.json(postsWithPublisherName);
  } catch (error) {
    next(error);
  }
};

export const getPostsByPublisDate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const date: string = req.params.date;
    const posts: Post[] = JSON.parse(data);
    const postWithPublishDate = findPostsByPublishDate(posts, date);
    if (postWithPublishDate.length == 0) {
      res.status(404).json({ message: 'Posts not found' });
      return;
    }
    res.json(postWithPublishDate);
  } catch (error) {
    next(error);
  }
};

export const getPostsByNumberLikes = (req: Request, res: Response, next: NextFunction) => {
  try {
    const numberLikes: number = parseInt(req.params.likes, DECIMAL_BASE);
    const posts: Post[] = JSON.parse(data);
    const postsWithNumberLikes: Post[] = findPostsByNumberLikes(posts, numberLikes);
    if (postsWithNumberLikes.length == 0) {
      res.status(404).json({ message: 'Posts not found' });
      return;
    }
    res.json(postsWithNumberLikes);
  } catch (error) {
    next(error);
  }
};

export const getPostsByContent = (req: Request, res: Response, next: NextFunction) => {
  try {
    const content: string = req.params.content;
    const posts: Post[] = JSON.parse(data);
    const postsWithContent: Post[] = findPostsByContent(posts, content);
    if (postsWithContent.length == 0) {
      res.status(404).json({ message: 'Posts not found' });
      return;
    }
    res.json(postsWithContent);
  } catch (error) {
    next(error);
  }
};
