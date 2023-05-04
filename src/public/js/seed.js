const client = new WebTorrent();
const torrentInfoEl = document.querySelector('#torrent-info');
const uploadFile = () => {
  const fileInput = document.getElementById('file');
  const files = fileInput.files;
  if (files.length < 1) return;
  client.seed(files, (torrent) => {
    console.log('Client is seeding ' + torrent.magnetURI);

    const link = document.createElement('a');
    const span = document.createElement('span');
    span.innerHTML = 'Seeding file(s): ';
    link.setAttribute('href', torrent.magnetURI);
    link.innerHTML = 'Magnet Link';
    torrentInfoEl.appendChild(link);
    torrentInfoEl.insertBefore(span, link);
  });
};
