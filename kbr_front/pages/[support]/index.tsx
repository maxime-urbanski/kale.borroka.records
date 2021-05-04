import { useRouter } from 'next/router'
import Link from 'next/link'
import CardArticle from '../../src/components/Article/CardArticle'
import {
  Button,
  Container,
  Column,
  BreadCrumb,
  BreadCrumbItem,
  Row,
  Title2,
  PaginationItem,
  Pagination,
} from '../../src/styles/styled'

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
const Catalog = (): JSX.Element => {
  const router = useRouter()
  const { support } = router.query

  return (
    <Container fluid>
      <Row position={'start'}>
        <Column col={12}>
          <BreadCrumb>
            <BreadCrumbItem>
              <Link href={'/'}>kale borroka records</Link>
            </BreadCrumbItem>
            <BreadCrumbItem disable>{support}</BreadCrumbItem>
          </BreadCrumb>
        </Column>
      </Row>
      <Row>
        <Column col={12}>
          <Title2>{support}</Title2>
        </Column>
      </Row>
      <Row>
        {test.map((component, index) => {
          return (
            <Column col={4} key={index}>
              {component}
            </Column>
          )
        })}
      </Row>
      <Row>
        <Column col={12}>
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

export default Catalog
