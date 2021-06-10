import { ArticleDetailProps } from '../../Interface/Interface'
import { Text, Select } from '../../styles/album'
import { HR } from '../../styles/styled'
import TitleColumn from './TitleColumn'
import RowOneColumn from '../Layout/RowOneColumn'
import RowTwoColumn from '../Layout/RowTwoColumn'

const note =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi, atque blanditiis consectetur cupiditate ex illum inventore laborum magnam minima molestiae officiis pariatur perferendis quasi recusandae sequi sit tempora ullam!'

const TextInfos = (text: string): JSX.Element => <Text>{text}</Text>

const SelectQuantity = (quantityAvailable: number[]): JSX.Element => (
  <Select>
    {quantityAvailable.map((quantity) => (
      <option value={quantity} key={quantity}>
        {quantity}
      </option>
    ))}
  </Select>
)

const ArticleDetail = ({ quantity }: ArticleDetailProps): JSX.Element => {
  const quantityAvailable: number[] = []
  for (let i = 0; i <= quantity; i++) {
    quantityAvailable.push(i)
  }
  const price = '13€'
  const style = 'Rap Punk Electro'
  return (
    <>
      <TitleColumn title={'infos'} mb={50} />
      <RowTwoColumn
        position={'start'}
        firstColumn={TextInfos('Style:')}
        secondColumn={TextInfos(style)}
      />
      <RowTwoColumn
        position={'start'}
        firstColumn={TextInfos('Prix:')}
        secondColumn={TextInfos(price)}
      />
      <RowTwoColumn
        firstColumn={TextInfos('Quantité:')}
        secondColumn={SelectQuantity(quantityAvailable)}
        position={'start'}
      />
      <HR />
      <RowOneColumn position={'center'} xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>
        <Text fontSize={16}>{note}</Text>
      </RowOneColumn>
      <RowOneColumn>
        <img src={'/img/cart.svg'} alt="cart" width={50} />
      </RowOneColumn>
    </>
  )
}

export default ArticleDetail
