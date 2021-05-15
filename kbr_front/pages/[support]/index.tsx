import { useRouter } from 'next/router'
import CardArticle from '../../src/components/Article/CardArticle'
import {
  Button,
  Container,
  Column,
  Row,
  Title2,
  PaginationItem,
  Pagination,
} from '../../src/styles/styled'
import Breadcrumb from '../../src/components/Layout/BreadCrumb'
import axios from 'axios'
import { GetStaticProps, GetStaticPaths } from 'next'

const test = [
  <CardArticle key={1} />,
  <CardArticle key={2} />,
  <CardArticle key={3} />,
  <CardArticle key={4} />,
  <CardArticle key={5} />,
  <CardArticle key={7} />,
  <CardArticle key={8} />,
  <CardArticle key={9} />,
  <CardArticle key={6} />,
]
const Catalog = ({ album }): JSX.Element => {
  const router = useRouter()
  const { support } = router.query
  console.log(album)
  return (
    <Container fluid>
      <Row position={'start'}>
        <Column xs={12} sm={12} md={6} lg={6} xl={4} xxl={4}>
          <Breadcrumb array={[`${support}`]} />
        </Column>
      </Row>
      <Row>
        <Column xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Title2>{support}</Title2>
        </Column>
      </Row>
      <Row>
        {test.map((component, index) => {
          return (
            <Column xs={12} sm={12} md={6} lg={6} xl={4} xxl={4} key={index}>
              {component}
            </Column>
          )
        })}
      </Row>
      <Row>
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
      </Row>
    </Container>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { support: 'lp' } },
      { params: { support: 'ep' } },
      { params: { support: 'cd' } },
      { params: { support: 'fanzine' } },
      { params: { support: 'production' } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await axios.get('http://localhost:5050/api/albums')
  const album = await res.data
  console.log(album)

  return {
    props: {
      album,
    },
  }
}

export default Catalog
