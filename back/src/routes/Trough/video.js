const postVideoInThroughTable = async (listVideos, VideoModel, postAlbum) => {
  const videoNotInDb = [];
  for (let i = 0; i < listVideos.length; i++) {
    const checkVideosInDb = await VideoModel.findOne({
      where: { youtube_url: listVideos[i].youtube_url },
    });
    if (checkVideosInDb !== null && checkVideosInDb.isNewRecord === false) {
      await postAlbum.addVideo(checkVideosInDb);
    } else {
      videoNotInDb.push(listVideos[i]);
    }
  }
  if (videoNotInDb.length > 0) {
    const postManyVideos = await VideoModel.bulkCreate(videoNotInDb);
    await postAlbum.addVideo(postManyVideos);
  }
};

module.exports = postVideoInThroughTable;
