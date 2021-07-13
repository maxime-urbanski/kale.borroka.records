export interface AlbumProps {
  id: string
  Album: {
    name: string
    folder: string
    kbrProd: boolean
    Artist: {
      name: string
    }
  }
  Price: { price: number }
  Format: { name: string }
}

export interface albums {
  albums: AlbumProps[]
}

export interface getArticlesProps {
  id: string
  name: string
}

export interface getAllSupports {
  supports: {
    name: string
  }
}

export interface GetDataProps {
  name: string
  albums: albums
}
