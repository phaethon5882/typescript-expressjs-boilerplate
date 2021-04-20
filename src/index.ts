import App from './app';
import PostController from './controllers/posts/posts.contoller';

const app = new App([new PostController()]);
app.listen();
