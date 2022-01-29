import { useState } from 'react'
import { Button, HR } from '../../styles/styled'
import { Text } from '../../styles/album'
import RowOneColumn from '../Layout/RowOneColumn'
import RowTwoColumn from '../Layout/RowTwoColumn'
import TitleColumn from './TitleColumn'
import { AlbumProps } from '../../Interface/interfaceData'
import TextInfos from './TestInfos'
import SelectQuantity from './SelectQuantity'

interface rowInfosProps {
  info: string
  value: JSX.Element
}

const ArticleDetail = ({ Album, quantity, setQuantity, price }: AlbumProps): JSX.Element => {
  const quantityAvailable: number[] = []
  for (let i = 0; i <= quantity; i++) {
    quantityAvailable.push(i)
  }
  const [chooseQuantity, setChooseQuantity] = useState(0)
  const from = `${Album.Artist.City.city} - ${Album.Artist.Country.country}`
  const date = Album.releaseDate
  const goodPrice = price / 100 +'€'
  const handleChange = (event): void => setChooseQuantity(event.target.value)
  const handleClick = (): void => setQuantity(chooseQuantity)

  const rowInfos: rowInfosProps[] = [
    {
      info: 'From:',
      value: TextInfos(from),
    },
    {
      info: 'Release Date:',
      value: TextInfos(date),
    },
    {
      info: 'Style:',
      value: TextInfos(Album.Style.name),
    },
    {
      info: 'Prix:',
      value: TextInfos(goodPrice),
    },
    {
      info: 'Quantité:',
      value: SelectQuantity(quantityAvailable, handleChange),
    },
  ]

  return (
    <>
      <TitleColumn title={'Information'} mb={40} position={'center'} />
      {rowInfos.map(({ info, value }, index) => (
        <RowTwoColumn
          position={'start'}
          firstColumn={TextInfos(info)}
          secondColumn={value}
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
          mb={15}
          key={index}
        />
      ))}
      <HR />
      <RowOneColumn xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Text>{Album.note}</Text>
      </RowOneColumn>
      <RowOneColumn xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Button border={'none'} bg={'yellow'} onClick={handleClick}>
          Panier
        </Button>
      </RowOneColumn>
    </>
  )
}

export default ArticleDetail
