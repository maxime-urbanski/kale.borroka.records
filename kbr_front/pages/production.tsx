import { GetServerSideProps } from 'next'
import { getData } from '../src/components/Data/data'
import TitleColumn from '../src/components/DetailArticle/TitleColumn'
import { useRouter } from 'next/router'
import { Column, Row, Container } from '../src/styles/styled'
import CardArticle from '../src/components/Article/CardArticle'

const Production = ({ ourProduction }): JSX.Element => {
  const router = useRouter()
  const production = router.asPath.replace('/', '')
  console.log(ourProduction)

  return (
    <Container fluid>
      <TitleColumn title={production} />
      <Row mb={80}>
        {ourProduction.map((component, index) => {
          return (
            <Column xs={12} sm={12} md={6} lg={6} xl={4} xxl={4} key={index}>
              <CardArticle {...component} />
            </Column>
          )
        })}
      </Row>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const ourProduction = await getData('production')
  return {
    props: {
      ourProduction: ourProduction.items,
    },
  }
}

export default Production
