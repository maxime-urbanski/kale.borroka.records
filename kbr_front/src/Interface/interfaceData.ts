export interface getArticlesProps {
  id: string
  Format: {
    name: string
  }
}

export interface getAllSupports {
  name: string
}

export interface GetDataProps {
  articles?: getArticlesProps | getArticlesProps[]
  supports?: getAllSupports | getAllSupports[]
}
