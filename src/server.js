import express from 'express';
import { join } from 'path';
import { router } from './api/router';
import { __dirname } from './utils';
export const initServer = () => {
  const app = express();

  app.use(express.static(join(__dirname, 'public')));
  app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
  });
  app.use(express.json());
  app.use('/torrent', router);
  app.listen(1312, () => {
    console.log('server is running');
  });
  return app;
};
