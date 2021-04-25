import { Container } from '../src/styles/styled'
import Available from '../src/components/Article/Available'

const home = (): JSX.Element => {
  return (
    <Container column={3} autoFlow={'column'} row={7}>
      <Available area={[1, 1, 7, 2]} title={'LP'} />
      <Available area={[1, 2, 7, 3]} title={'EP'} />
      <Available area={[1, 3, 7, 4]} title={'CD'} />
    </Container>
  )
}

export default home
