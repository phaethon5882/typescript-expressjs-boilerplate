import dotenv from 'dotenv';

dotenv.config();

const { env } = process;

export const __PROD__ = env.NODE_ENV === 'production';
export const PORT = env.PORT || 3000;
