import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AlbumProps } from '../../Interface/interfaceData'
import {
  Card,
  CardBody,
  CardButton,
  CardIcon,
  CardImg,
  CardPrice,
  CardSubtitle,
  CardTitle,
  CardTop,
  Ribbon,
  Overlay,
} from '../../styles/card'

const CardArticle = ({ Album, price, Format, id, slug }: AlbumProps): JSX.Element => {
  const { name, folder, kbrProd, kbrNum, Artist } = Album
  const [img, setImg] = useState('/img/vinyl.svg')
  const support = Format.name.toLowerCase()
  const Price = price / 100 + '€'
  useEffect(() => {
    const { name } = Format
    if (name === 'CD') {
      setImg('/img/cd.svg')
    }
    if (name === 'TAPE') {
      setImg('/img/tape.svg')
    }
  }, [Format])

  return (
    <div style={{ justifyItems: 'center' }}>
      <Card>
        {kbrProd && (
          <Overlay>
            <Ribbon>KBR#{kbrNum}</Ribbon>
          </Overlay>
        )}
        <CardTop>
          <CardImg src={folder} alt={name} />
        </CardTop>
        <CardBody>
          <CardTitle>{Artist.name}</CardTitle>
          <CardSubtitle fontSize={18}>{name}</CardSubtitle>
          <CardIcon src={img} left={45} />
          <CardPrice>{Price}</CardPrice>
          <Link href={`/catalog/${support}/${slug}`}>
            <CardButton bg={'white'}>Details</CardButton>
          </Link>
          <CardButton left={185} color={'white'} border={'none'}>
            Panier
          </CardButton>
        </CardBody>
      </Card>
    </div>
  )
}

export default CardArticle
