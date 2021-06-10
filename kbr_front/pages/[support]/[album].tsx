import { useState } from 'react'
import { useRouter } from 'next/router'
import { Container, HR } from '../../src/styles/styled'
import { ArticleName, Picture } from '../../src/styles/album'
import ArticleDetail from '../../src/components/DetailArticle/ArticleDetail'
import Tracklist from '../../src/components/DetailArticle/Tracklist'
import Breadcrumb from '../../src/components/Layout/BreadCrumb'
import RowOneColumn from '../../src/components/Layout/RowOneColumn'
import RowTwoColumn from '../../src/components/Layout/RowTwoColumn'

const article = {
  id: '0123456789',
  quantity: 1,
  price: 1000,
}

const Img = <Picture src={'/img/1725109.jpg'} alt={'ok'} width={450} borderRadius={5} />
const details = <ArticleDetail quantity={article.quantity} />

const Article = (): JSX.Element => {
  const [quantity, setQuantity] = useState(0)
  const router = useRouter()
  const { album } = router.query

  const addBasket = (): void => {
    localStorage.setItem('cart', JSON.stringify(article))
    console.log(localStorage.getItem('cart'))
  }
  return (
    <Container>
      <Breadcrumb links={['lp', `${album}`]} />
      <RowOneColumn mb={80} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <ArticleName fontSize={45}>{album} death brigade - bad accent anthems</ArticleName>
      </RowOneColumn>
      <RowTwoColumn firstColumn={Img} secondColumn={details} />
      <HR />
      <Tracklist />
    </Container>
  )
}

export default Article
