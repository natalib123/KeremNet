import { Request, Response, NextFunction } from 'express';
import { Post } from '../Model/Post';
import { findPostById, 
        findPostByPublisherName,
        findPostByPublishDate,
        findPostByNumberLikes,
        findPostByContent
} from '../Services/postFounder'

const data: string = require('../Model/posts.json');
const posts: Post[] = JSON.parse(data);

export const getPosts = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

export const getPostById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: number = parseInt(req.params.id, 10);
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
    const numberLikes: number = parseInt(req.params.likes, 10);
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
