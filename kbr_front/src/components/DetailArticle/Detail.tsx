import ArticleDetail from './ArticleDetail'
import { AlbumProps } from '../../Interface/interfaceData'
import React from 'react'

const details = (props: AlbumProps, setQuantity: React.Dispatch<number>): JSX.Element => {
  console.log(props)
  return (
    <ArticleDetail {...props} setQuantity={setQuantity}/>
  )
}

export default details
