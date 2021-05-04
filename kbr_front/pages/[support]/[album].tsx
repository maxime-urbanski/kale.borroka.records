import { Row, Column, Container, Title2 } from '../../src/styles/styled'
import Breadcrumb from '../../src/components/Layout/BreadCrumb'
import { useRouter } from 'next/router'

const Article = (): JSX.Element => {
  const router = useRouter()
  const { album } = router.query
  return (
    <Container>
      <Row position={'start'}>
        <Column col={12}>
          <Breadcrumb array={['lp', `${album}`]} />
        </Column>
      </Row>
      <Row>
        <Column col={12}>
          <Title2>{album}</Title2>
        </Column>
      </Row>
      <Row>
        <Column col={4}>
          <img src={'/img/1725109.jpg'} alt={'ok'} width={500} height={500} />
        </Column>
        <Column col={7}>
          <p>BAND LOCATION</p>
          <p>STYLE</p>
          <p>ALBUM RELEASE</p>
        </Column>
      </Row>
    </Container>
  )
}

export default Article
