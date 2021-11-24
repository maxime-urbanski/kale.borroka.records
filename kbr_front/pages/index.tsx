import { Container, Row, Column, Title2 } from '../src/styles/styled'
import Available from '../src/components/Article/Available'
import RowOneColumn from "../src/components/Layout/RowOneColumn";
import TitleColumn from "../src/components/DetailArticle/TitleColumn";

const home = (): JSX.Element => {
  return (
    <Container>
      <TitleColumn title={'Toujours disponible'} />
      <Row>
        <Column xs={12} sm={12} md={12} lg={6} xl={4} xxl={4}>
          <Available title={'LP'} />
        </Column>
        <Column xs={12} sm={12} md={12} lg={6} xl={4} xxl={4}>
          <Available title={'CD'} />
        </Column>
        <Column xs={12} sm={12} md={12} lg={6} xl={4} xxl={4}>
          <Available title={'EP'} />
        </Column>
      </Row>
    </Container>
  )
}

export default home
