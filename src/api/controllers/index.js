import { torrentClient } from '../../lib/torrent/client';
import { TorrentController } from './torrent.controller';

export const torrentController = new TorrentController(torrentClient);
