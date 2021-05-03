import { Container, Row, Column } from '../src/styles/styled'
import Available from '../src/components/Article/Available'

const home = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <Column col={4}>
          <Available title={'LP'} />
        </Column>
        <Column col={4}>
          <Available title={'LP'} />
        </Column>
        <Column col={4}>
          <Available title={'LP'} />
        </Column>
      </Row>
    </Container>
  )
}

export default home
