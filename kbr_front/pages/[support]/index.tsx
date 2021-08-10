import {GetServerSideProps} from 'next'
import { useRouter } from 'next/router'
import { getData } from '../../src/components/Data/data'
import { albums } from '../../src/Interface/interfaceData'
import { Container, Column, Row, Title2 } from '../../src/styles/styled'
import CardArticle from '../../src/components/Article/CardArticle'
import Breadcrumb from '../../src/components/Layout/BreadCrumb'

const Catalog = ({ albums }: albums): JSX.Element => {
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { support } = params
  const getArticlesBySupports = `articles/${support}`
  const albums = await getData(getArticlesBySupports)
  console.log(albums)
  return {
    props: {
      albums,
    },
  }
}

export default Catalog
