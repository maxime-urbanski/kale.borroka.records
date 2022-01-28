import { GetServerSideProps } from 'next'
import { getData } from '../../src/components/Data/data'
import { Container, Column, Row, Title2 } from '../../src/styles/styled'


const homeCatalog = ({catgalogSection}) => {
  return (
    <Container>
      <Row>
        {catgalogSection.map(({name, slug}, index) => {
          return (
            <Column xs={12} sm={12} md={6} lg={6} xl={4} xxl={4} key={index}>
              <a href={`/catalog${slug}`}>{name}</a>
            </Column>
          )
        })}
      </Row>
    </Container>

  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const catgalogSection = await getData('catalog')
  return {
    props: {
      catgalogSection
    },
  }
}
export default homeCatalog
