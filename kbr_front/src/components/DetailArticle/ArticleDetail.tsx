import { ArticleDetailProps } from '../../Interface/Interface'
import { Text, Select } from '../../styles/album'
import { Button } from '../../styles/styled'
import RowOneColumn from '../Layout/RowOneColumn'
import RowTwoColumn from '../Layout/RowTwoColumn'
import TitleColumn from './TitleColumn'

const note =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi, atque blanditiis consectetur cupiditate ex illum inventore laborum magnam minima molestiae officiis pariatur perferendis quasi recusandae sequi sit tempora ullam!'

const TextInfos = (text: string | Element): JSX.Element => <Text>{text}</Text>

const SelectQuantity = (quantityAvailable: number[]): JSX.Element => (
  <Select>
    {quantityAvailable.map((quantity) => (
      <option value={quantity} key={quantity}>
        {quantity}
      </option>
    ))}
  </Select>
)

interface rowInfosProps {
  info: string
  value: JSX.Element
}

const price = '13€'
const style = 'Rap Punk Electro'
const date = '20/04/2020'
const from = 'moscow russia'

const ArticleDetail = ({ quantity }: ArticleDetailProps): JSX.Element => {
  const quantityAvailable: number[] = []
  for (let i = 0; i <= quantity; i++) {
    quantityAvailable.push(i)
  }
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
      value: TextInfos(style),
    },
    {
      info: 'Prix:',
      value: TextInfos(price),
    },
    {
      info: 'Quantité:',
      value: SelectQuantity(quantityAvailable),
    },
  ]
  return (
    <>
      <TitleColumn title={'Information'} mb={40} position={'start'}/>
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
          mb={10}
          key={index}
        />
      ))}
      <RowOneColumn position={'center'} xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>
        <Text fontSize={16}>{note}</Text>
      </RowOneColumn>
      <RowOneColumn xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Button border={'none'} bg={'yellow'}>
          Panier
        </Button>
      </RowOneColumn>
    </>
  )
}

export default ArticleDetail
