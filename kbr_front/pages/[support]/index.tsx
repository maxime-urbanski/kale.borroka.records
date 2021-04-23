import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import CardArticle from '../../src/components/Article/CardArticle'
import { Container } from '../../src/styles/styled'

type Props = {
  data: string[]
}

const Catalog = ({ data }: Props): JSX.Element => {
  const router = useRouter()
  const { support } = router.query
  console.log(data, support)
  return (
    <Container fluid>
      <CardArticle />
      <CardArticle />
      <CardArticle />
      <CardArticle />
      <CardArticle />
      <CardArticle />
    </Container>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const req = await axios.get('http://localhost:5050/api/albums')
  const data = await req.data
  return {
    props: {
      data,
    },
  }
}
export default Catalog
