import { Request, Response, NextFunction } from 'express';
import { Post } from '../Model/Post';
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
    const post = posts.find((i) => i.id === id);
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
    const post = posts.find((i) => i.publisherName === publisherName);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};