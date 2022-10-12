import { useState } from 'react'
import TitleColumn from './TitleColumn'
import { AlbumProps } from '../../Interface/interfaceData'

interface rowInfosProps {
  info: string
  value: string
}

const ArticleDetail = ({ Album, quantity, setQuantity, price }: AlbumProps): JSX.Element => {
  const quantityAvailable: number[] = []
  for (let i = 0; i <= quantity; i++) {
    quantityAvailable.push(i)
  }
  const [chooseQuantity, setChooseQuantity] = useState(0)
  const from = `${Album.Artist.City.city} - ${Album.Artist.Country.country}`
  const date = Album.releaseDate
  const goodPrice = price / 100 + '€'
  const handleChange = (event): void => setChooseQuantity(event.target.value)
  const handleClick = (): void => setQuantity(chooseQuantity)

  const rowInfos: rowInfosProps[] = [
    {
      info: 'From:',
      value: from,
    },
    {
      info: 'Release Date:',
      value: date,
    },
    {
      info: 'Style:',
      value: Album.Style.name,
    },
    {
      info: 'Prix:',
      value: goodPrice,
    },
    {
      info: 'Quantité:',
      value: quantityAvailable,
      handleChange,
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TitleColumn title={'Information'} mb={40} position={'center'} />
      {rowInfos.map(({ info, value }, index) => (
        <p key={index}>
          {info} {value}
        </p>
      ))}
    </div>
  )
}

export default ArticleDetail
