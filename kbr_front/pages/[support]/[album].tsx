import { Row, Column, Container } from '../../src/styles/styled'
import { ArticleName, Picture } from '../../src/styles/album'
import Breadcrumb from '../../src/components/Layout/BreadCrumb'
import { useRouter } from 'next/router'
import Tracklist from '../../src/components/DetailArticle/Tracklist'
import ArticleDetail from '../../src/components/DetailArticle/ArticleDetail'
import RowComponent from '../../src/components/Layout/RowComponent'
import { useState } from 'react'

const article = {
  id: '0123456789',
  quantity: 1,
  price: 1000,
}
const Article = (): JSX.Element => {
  const [chooseQuantity, setChooseQuantity] = useState(0)
  const router = useRouter()
  const { album } = router.query

  const addBasket = (): void => {
    localStorage.setItem('cart', JSON.stringify(article))
    console.log(localStorage.getItem('cart'))
  }
  return (
    <Container>
      <Breadcrumb array={['lp', `${album}`]} />
      <RowComponent mb={50} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <ArticleName fontSize={45}>{album} death brigade - bad bad accents</ArticleName>
      </RowComponent>
      <Row>
        <Column xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
          <Picture src={'/img/1725109.jpg'} alt={'ok'} width={450} borderRadius={5} />
        </Column>
        <Column xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
          <ArticleDetail quantity={article.quantity} />
        </Column>
        <Column xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
          <Tracklist />
        </Column>
      </Row>
    </Container>
  )
}

export default Article
