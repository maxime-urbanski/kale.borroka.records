import { Container, Row, Column, Title2 } from '../src/styles/styled'
import Available from '../src/components/Article/Available'
import RowComponent from "../src/components/Layout/RowComponent";

const home = (): JSX.Element => {
  return (
    <Container>
      <RowComponent xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Title2>Toujours Disponible</Title2>
      </RowComponent>
      <Row>
        <Column xs={12} sm={12} md={12} lg={6} xl={4} xxl={4}>
          <Available title={'LP'} />
        </Column>
        <Column xs={12} sm={12} md={12} lg={6} xl={4} xxl={4}>
          <Available title={'LP'} />
        </Column>
        <Column xs={12} sm={12} md={12} lg={6} xl={4} xxl={4}>
          <Available title={'LP'} />
        </Column>
      </Row>
    </Container>
  )
}

export default home
