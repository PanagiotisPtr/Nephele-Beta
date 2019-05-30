import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Routers
import indexRouter from './routes/index';
import videoRouter from './routes/videos';
import thumbnailRouter from './routes/thumbnails';
import creatorRouter from './routes/creators';
import userRouter from './routes/users';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/videos', videoRouter);
app.use('/thumbnails', thumbnailRouter);
app.use('/creators', creatorRouter);
app.use('/users', userRouter);

export default app;