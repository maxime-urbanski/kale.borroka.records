import { Container, Row, Column } from '../src/styles/styled'
import Available from '../src/components/Article/Available'

const home = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <Column xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          YOUHOU
        </Column>
      </Row>
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
