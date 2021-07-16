import ArticleDetail from './ArticleDetail'
import { AlbumProps } from '../../Interface/interfaceData'
import React from 'react'

const details = (props: AlbumProps, setQuantity: React.Dispatch<number>): JSX.Element => (
  <ArticleDetail {...props} setQuantity={setQuantity} />
)

export default details
