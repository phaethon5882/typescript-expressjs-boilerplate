import morgan from 'morgan';
import { __PROD__ } from './constants/env';

const logger = morgan(__PROD__ ? 'combined' : 'dev');

export default logger;
