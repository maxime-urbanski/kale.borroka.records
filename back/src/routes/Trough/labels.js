const postLabelInThroughTable = async (listLabels, LabelModel, postAlbum) => {
  const labelsNotInDB = [];
  for (let i = 0; i < listLabels.length; i++) {
    const checkLabelsInDb = await LabelModel.findOne({
      where: { name: listLabels[i].name },
    });
    if (checkLabelsInDb !== null && checkLabelsInDb.isNewRecord === false) {
      await postAlbum.addLabel(checkLabelsInDb);
    } else {
      labelsNotInDB.push(listLabels[i]);
    }
  }
  if (labelsNotInDB.length > 0) {
    const bulkLabels = await LabelModel.bulkCreate(labelsNotInDB, { validate: true });
    await postAlbum.addLabel(bulkLabels);
  }
};

module.exports = postLabelInThroughTable;
