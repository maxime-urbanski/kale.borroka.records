import { Row, Column, Container, HR, Button } from '../../src/styles/styled'
import { ArticleName, Picture } from '../../src/styles/album'
import Breadcrumb from '../../src/components/Layout/BreadCrumb'
import { useRouter } from 'next/router'
import Tracklist from '../../src/components/Article/Tracklist'

const Article = (): JSX.Element => {
  const router = useRouter()
  const { album } = router.query
  const article = {
    id: '0123456789',
    quantity: 1,
    price: 1000,
  }
  const addBasket = (): void => {
    localStorage.setItem('cart', JSON.stringify(article))
    console.log(localStorage.getItem('cart'))
  }
  return (
    <Container>
      <Row position={'start'} mb={100}>
        <Breadcrumb array={['lp', `${album}`]} />
      </Row>
      <Row position={'start'}>
        <Column xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
          <Picture src={'/img/1725109.jpg'} alt={'ok'} width={450} mL={100} borderRadius={5} />
        </Column>
        <Column xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
          <div style={{ height: '100%', width: '100%' }}>
            <Row>
              <Column xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <ArticleName fontSize={45}>{album} death brigade - bad bad accents</ArticleName>
              </Column>
            </Row>
            <HR />
            <Row>
              <Column xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Tracklist />
              </Column>
            </Row>
            <HR />
            <Row>
              <Column xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                <Button border={'none'} onClick={addBasket}>
                  Panier
                </Button>
              </Column>
              <Column xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                <Button border={'none'}>Partager</Button>
              </Column>
            </Row>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Article
