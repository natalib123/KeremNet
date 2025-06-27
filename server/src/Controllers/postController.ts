import { Request, Response, NextFunction } from 'express';
import { Post } from '../Model/Post';
import { findPostById, 
        findPostByPublisherName,
        findPostByPublishDate,
        findPostByNumberLikes,
        findPostByContent
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

export const getPostByPublisherName = (req: Request, res: Response, next: NextFunction) => {
  try {
    const publisherName: string = req.params.publisherName;
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

export const getPostByPublisDate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const date: string = req.params.date;
    const posts: Post[] = JSON.parse(data);
    const post = findPostByPublishDate(posts, date);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};

export const getPostByNumberLikes = (req: Request, res: Response, next: NextFunction) => {
  try {
    const numberLikes: number = parseInt(req.params.likes, DECIMAL_BASE);
    const posts: Post[] = JSON.parse(data);
    const post = findPostByNumberLikes(posts, numberLikes);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};

export const getPostByContent = (req: Request, res: Response, next: NextFunction) => {
  try {
    const content: string = req.params.content;
    const posts: Post[] = JSON.parse(data);
    const post = findPostByContent(posts, content);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};
