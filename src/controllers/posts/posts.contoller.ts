import { Router, Request, Response } from 'express';
import IController from '../controller.interface';
import IPost from './post.interface';
import { v4 as uuid } from 'uuid';

export default class PostController implements IController {
  public router = Router();

  private posts: IPost[] = [];

  constructor() {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get('/posts', this.getAllPosts);
    this.router.post('/post', this.createAPost);
  }

  getAllPosts = (req: Request, res: Response) => {
    res.send(this.posts);
  };

  createAPost = (req: Request, res: Response) => {
    const newPost: IPost = {
      ...req.body,
      id: uuid(),
    };

    this.posts.push(newPost);

    res.send(newPost);
  };
}
