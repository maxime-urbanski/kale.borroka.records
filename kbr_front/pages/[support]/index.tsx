import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { Container, Column, Row, Title2 } from '../../src/styles/styled'
import { AlbumProps } from '../../src/Interface/Interface'
import axios from 'axios'
import CardArticle from '../../src/components/Article/CardArticle'
import Breadcrumb from '../../src/components/Layout/BreadCrumb'

interface album {
  album: AlbumProps[]
}

const Catalog = ({ album }: album): JSX.Element => {
  const router = useRouter()
  const { support } = router.query

  return (
    <Container fluid>
      <Breadcrumb links={[`${support}`]} />
      <Row>
        <Column xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Title2>{support}</Title2>
        </Column>
      </Row>
      <Row>
        {album.map((component, index) => {
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
  const res = await axios.get('http://localhost:5050/api/formats')
  const support = await res.data
  return {
    paths: support.map(({ name }) => ({ params: { support: name } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { support } = params
  const res = await axios.get(`http://localhost:5050/api/articles/${support}`)
  const album = await res.data

  return {
    props: {
      album,
    },
  }
}

export default Catalog
