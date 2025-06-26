import { Request, Response, NextFunction } from 'express';
import { Post } from '../Model/Post';
import { findPostById, findPostByPublisherName} from '../Services/postFounder'
const data = require('../Model/posts.json');

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
    const id = parseInt(req.params.id, 10);
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

export const getPostByPublisherName = (req: Request, res: Response, next: NextFunction) => {
  try {
    const publisherName: string = req.params.publisherName
    const posts: Post[] = JSON.parse(data);
    const post = findPostByPublisherName(posts, publisherName);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};