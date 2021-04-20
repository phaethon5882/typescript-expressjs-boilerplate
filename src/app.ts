import express, { Application, Router, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from './logger';
import IController from './controllers/controller.interface';
import { PORT } from './constants/env';

class App {
  private app: Application = express();

  constructor(controllers: IController[]) {
    this.useMiddlewares(this.app);
    this.useControllers(this.app, controllers);
  }

  private useMiddlewares(app: Application) {
    app.use(logger);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(cors());
  }

  private useControllers(app: Application, controllers: IController[]) {
    controllers.forEach((controller) => {
      app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(PORT, () => {
      console.log(`App listening on the port ${PORT}`);
    });
  }
}

export default App;
