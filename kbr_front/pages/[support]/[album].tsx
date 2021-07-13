import { GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'
import { Container, HR } from '../../src/styles/styled'
import { ArticleName, Picture } from '../../src/styles/album'
import { AlbumProps } from '../../src/Interface/interfaceData'
import ArticleDetail from '../../src/components/DetailArticle/ArticleDetail'
import Tracklist from '../../src/components/DetailArticle/Tracklist'
import Breadcrumb from '../../src/components/Layout/BreadCrumb'
import RowOneColumn from '../../src/components/Layout/RowOneColumn'
import RowTwoColumn from '../../src/components/Layout/RowTwoColumn'
import { getData } from '../../src/components/Data/data'

const article = {
  id: '0123456789',
  quantity: 1,
  price: 1000,
}

interface DiscProps {
  disc: AlbumProps
}

const Img = (img: string, name: string): JSX.Element => (
  <Picture src={img} alt={name} width={450} borderRadius={5} />
)
const details = <ArticleDetail quantity={article.quantity} />

const Article = ({ disc }: DiscProps): JSX.Element => {
  const { Album, Price, Format, Quantity } = disc
  const { Artist, name, folder } = Album
  const title = `${Artist.name} - ${name}`
  console.log('disc ==>', disc)
  const [quantity, setQuantity] = useState(0)

  const addBasket = (): void => {
    localStorage.setItem('cart', JSON.stringify(article))
    console.log(localStorage.getItem('cart'))
  }
  return (
    <Container>
      <Breadcrumb links={[Format.name, title]} />
      <RowOneColumn mb={80} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <ArticleName fontSize={45}>{title}</ArticleName>
      </RowOneColumn>
      <RowTwoColumn
        firstColumn={Img(folder, name)}
        secondColumn={details}
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={5}
        xxl={4}
        mb={50}
      />
      <HR />
      <Tracklist />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getData('articles')
  return {
    paths: articles.map(({ Format, id }) => ({
      params: { support: Format.name.toLowerCase(), album: id },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { support, album } = params
  const getDiscInformation = `articles/${support}/${album}`
  const disc = await getData(getDiscInformation)

  return {
    props: {
      disc,
    },
  }
}

export default Article
