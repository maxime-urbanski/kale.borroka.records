import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { Container, Column, Row, Title2 } from '../../src/styles/styled'
import { AlbumProps } from '../../src/Interface/Interface'
import CardArticle from '../../src/components/Article/CardArticle'
import Breadcrumb from '../../src/components/Layout/BreadCrumb'
import { getData } from '../../src/components/Data/data'

interface albums {
  albums: AlbumProps[]
}

const Catalog = ({ albums }: albums): JSX.Element => {
  const router = useRouter()
  const { support } = router.query
  console.log(albums)
  return (
    <Container fluid>
      <Breadcrumb links={[`${support}`]} />
      <Row>
        <Column xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Title2>{support}</Title2>
        </Column>
      </Row>
      <Row>
        {albums.map((component, index) => {
          return (
            <Column xs={12} sm={12} md={6} lg={6} xl={4} xxl={4} key={index}>
              <CardArticle {...component} />
            </Column>
          )
        })}
      </Row>
      {/*<Row>
        <Column xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Pagination>
            <PaginationItem>
              <Button bg={'white'} color={'#b14542'} width={40} height={40}>
                1
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button bg={'white'} color={'#b14542'} width={40} height={40}>
                1
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button bg={'white'} color={'#b14542'} width={40} height={40}>
                1
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button bg={'white'} color={'#b14542'} width={40} height={40}>
                1
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button bg={'white'} color={'#b14542'} width={40} height={40}>
                1
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button bg={'white'} color={'#b14542'} width={40} height={40}>
                1
              </Button>
            </PaginationItem>
          </Pagination>
        </Column>
      </Row>*/}
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const supports = await getData('formats')
  return {
    paths: supports.map(({ name }) => ({ params: { support: name.toLowerCase() } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { support } = params
  const getArticlesBySupports = `articles/${support}`
  const albums = await getData(getArticlesBySupports)
  return {
    props: {
      albums,
    },
  }
}

export default Catalog
