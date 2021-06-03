import { ContainerFlex, Text, Select } from '../../styles/album'
import { HR } from '../../styles/styled'
import { ArticleDetailProps } from '../../Interface/Interface'
import TitleColumn from './TitleColumn'
import RowComponent from '../Layout/RowComponent'

const note =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi, atque blanditiis consectetur cupiditate ex illum inventore laborum magnam minima molestiae officiis pariatur perferendis quasi recusandae sequi sit tempora ullam!'

const ArticleDetail = ({ quantity }: ArticleDetailProps): JSX.Element => {
  const optionHtml: number[] = []
  for (let i = 0; i <= quantity; i++) {
    optionHtml.push(i)
  }
  return (
    <ContainerFlex flexDirection={'column'}>
      <TitleColumn title={'infos'} />
      <RowComponent position="start" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <ContainerFlex>
          <Text>Style: </Text>
          <Text>Rap Punk Electro</Text>
        </ContainerFlex>
        <ContainerFlex>
          <Text>Quantity: </Text>
          <Select>
            {optionHtml.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </Select>
        </ContainerFlex>
      </RowComponent>
      <RowComponent position={'start'} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Text color={'yellow'}>Prix: 13€</Text>
      </RowComponent>
      <HR />
      <RowComponent xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Text fontSize={16}>{note}</Text>
      </RowComponent>
      <RowComponent xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <button>Add to cart</button>
      </RowComponent>
    </ContainerFlex>
  )
}

export default ArticleDetail
