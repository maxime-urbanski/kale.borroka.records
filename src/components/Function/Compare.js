function compare (a, b) {   
    const artisteA = a.artiste.toUpperCase();
    const artisteB = b.artiste.toUpperCase();

    let comparison = 0;
    if (artisteA > artisteB) {
        comparison = 1;
    } else if (artisteB > artisteA) {
        comparison = -1;
    }
    return comparison
}

export default compare;

