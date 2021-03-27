const addTroughTableTracklist = async (tracklist, SongModel, postAlbum) => {
  const addTracklist = await SongModel.bulkCreate(tracklist);
  await postAlbum.addSong(addTracklist);
};

module.exports = addTroughTableTracklist;
