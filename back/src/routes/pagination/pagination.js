module.exports = {
  getPagination : (page, size) => {
    const limit = size ? +size : 9;
    const offset = page ? page * limit : 0;
    return {limit, offset}
  },
  getPagingData: (data, page, limit) => {
    console.log(data)
    const { count: totalItems, rows: items } = data;
    const currentPage = page ? +page + 1 : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, items, totalPages, currentPage };
  }
}
