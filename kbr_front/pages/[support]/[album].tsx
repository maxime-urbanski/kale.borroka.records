import { Row, Column, Container } from '../../src/styles/styled'
import { ArticleName, Picture } from '../../src/styles/album'
import Breadcrumb from '../../src/components/Layout/BreadCrumb'
import { useRouter } from 'next/router'

const Article = (): JSX.Element => {
  const router = useRouter()
  const { album } = router.query

  return (
    <Container>
      <Row position={'start'}>
        <Column xs={12}>
          <Breadcrumb array={['lp', `${album}`]} />
        </Column>
      </Row>
      <Row position={'start'}>
        <Column>
          <Picture
            src={'/img/1725109.jpg'}
            alt={'ok'}
            width={400}
            height={400}
            mL={100}
            borderRadius={5}
          />
        </Column>
        <Column>
          <Row>
            <Column>
              <ArticleName fontSize={50}>{album} death brigade - bad bad accents</ArticleName>
            </Column>
          </Row>
          <Row position={'start'}>
            <Column>
              <p>BAND LOCATION</p>
              <p>STYLE</p>
              <p>ALBUM RELEASE</p>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  )
}

export default Article
