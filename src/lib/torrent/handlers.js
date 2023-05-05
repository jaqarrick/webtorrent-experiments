export const addTorrentHandlers = (torrent) => {
  torrent.on('ready', function () {
    console.log('torrent ready!');
  });
  torrent.on('download', function (bytes) {
    console.log('just downloaded: ' + bytes);
    console.log('total downloaded: ' + torrent.downloaded);
    console.log('download speed: ' + torrent.downloadSpeed);
    console.log('progress: ' + torrent.progress);

    // console.log("creating torrent server")
    // const server = torrent.createServer()
    // server.listen(1313)
  });

  torrent.on('done', function () {
    console.log('torrent finished downloading');
    torrent.files.forEach(function (file) {
      // do something with file
    });
  });

  torrent.on('wire', function (wire, addr) {
    console.log('connected to peer with address ' + addr);
  });
};
