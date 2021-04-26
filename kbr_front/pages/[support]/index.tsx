import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import Link from 'next/link'
import CardArticle from '../../src/components/Article/CardArticle'
import { Container, Column, BreadCrumb, BreadCrumbItem, Row } from '../../src/styles/styled'

const test = [
  <CardArticle key={1} />,
  <CardArticle key={2} />,
  <CardArticle key={3} />,
  <CardArticle key={4} />,
  <CardArticle key={5} />,
  <CardArticle key={6} />
]
const Catalog = (): JSX.Element => {
  const router = useRouter()
  const { support } = router.query

  return (
    <Container fluid>
      <Row>
        <Column>
          <BreadCrumb>
            <BreadCrumbItem>
              <Link href={'/'}>kale borroka records</Link>
            </BreadCrumbItem>
            <BreadCrumbItem disable>{support}</BreadCrumbItem>
          </BreadCrumb>
        </Column>
      </Row>
      <Row row={2}>
        {test.map((component) => {
          return component
        })}
      </Row>
    </Container>
  )
}

export default Catalog
