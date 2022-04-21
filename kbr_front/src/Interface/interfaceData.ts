import React from 'react'

export interface AlbumProps {
  id: string
  Album: {
    name: string
    folder: string
    kbrProd: boolean
    kbrNum: number
    releaseDate: string
    note: string
    Artist: {
      name: string
      City: { city: string }
      Country: { country: string }
    }
    Labels: {
      name: string
    }
    Songs: {
      name: string
      track: number
    }
    Style: {
      name: string
    }
  }
  price: number
  name: string
  Format: { name: string }
  quantity: number
  slug: string
  setQuantity: React.Dispatch<number>
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
  albums: AlbumProps[]
}
