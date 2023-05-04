import WebTorrent from 'webtorrent-hybrid';
import { join } from 'path';
import { __dirname } from './utils';
export const initClient = () => {
  const client = new WebTorrent();
  client.seed(join(__dirname, '..', 'assets', 'seed-me.txt'), (torrent) => {
    console.log('Client is seeding ' + torrent.magnetURI);
  });
  return client;
};
