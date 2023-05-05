export const listTorrents = (torrents) => {
  if (this.torrents.length === 0) {
    console.log('No downloaded torrents...yet....');
  } else {
    console.log(
      this.torrents.map(({ name, infoHash, magnetURI }) => ({
        name,
        infoHash,
        magnetURI,
      }))
    );
  }
};
