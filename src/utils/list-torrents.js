export const listTorrents = (torrents) => {
  if (torrents.length === 0) {
    console.log('No downloaded torrents...yet....');
  } else {
    console.log(
      torrents.map(({ name, infoHash, magnetURI }) => ({
        name,
        infoHash,
        magnetURI,
      }))
    );
  }
};
