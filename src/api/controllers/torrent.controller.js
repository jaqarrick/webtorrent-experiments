import { addTorrentHandlers } from '../../lib/torrent/handlers';
import { listTorrents } from '../../utils';

export class TorrentController {
  constructor(webtorrentClient) {
    this.webtorrentClient = webtorrentClient;
    this.post = this.post.bind(this);
    this.listTorrents = this.listTorrents.bind(this);
    this.webtorrentClient.on('error', (err) => {
      console.error(err);
    });

    const sleep = 1000;
    this.interval = setInterval(listTorrents, sleep);
    this.torrents = [];
  }

  post(req, res) {
    const magnetLink = req.body['magnetLink'];
    if (!magnetLink) {
      return res.sendStatus(400);
    }
    console.log(magnetLink);
    res.sendStatus(201);

    this.webtorrentClient
      .add(magnetLink, (torrent) => {
        console.log('Torrent is downloaded');
        console.log('Torrent info hash:', torrent.infoHash);
        console.log('Torrent magnet URI:', torrent.magnetURI);
        this.torrents.push(torrent);
        addTorrentHandlers(torrent);
      })
      .on('error', (err) => {
        res.sendStatus(500);
      });
  }
}
