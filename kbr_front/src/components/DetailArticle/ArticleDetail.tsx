import { ContainerFlex, Text, Select } from '../../styles/album'
import { Column, Row, HR } from '../../styles/styled'
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
    <>
      <TitleColumn title={'infos'} mb={20} />
      <Row position={'start'} mb={1}>
        <Column xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Text>Style:</Text>
        </Column>
        <Column xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Text>Rap Punk Electro</Text>
        </Column>
      </Row>
      <Row position={'start'} mb={5}>
        <Column xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Text>Prix:</Text>
        </Column>
        <Column xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Text>13€</Text>
        </Column>
      </Row>
      <Row position={'start'} mb={5}>
        <Column xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Text>Quantity:</Text>
        </Column>
        <Column xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Select>
            {optionHtml.map((quantity) => (
              <option value={quantity} key={quantity}>
                {quantity}
              </option>
            ))}
          </Select>
        </Column>
      </Row>
      <HR />
      <RowComponent xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Text fontSize={16}>{note}</Text>
      </RowComponent>
    </>
  )
}

export default ArticleDetail
