function compare(a, b) {
  const artisteA = a.artiste.toUpperCase();
  const artisteB = b.artiste.toUpperCase();
  if (artisteA > artisteB) {
    return 1;
  } else if (artisteB > artisteA) {
    return -1;
  }
  return compare;
}

export default compare;
