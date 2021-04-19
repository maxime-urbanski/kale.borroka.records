import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import axios from 'axios'

type Props = {
  data: string[]
}

const Catalog = ({ data }: Props): JSX.Element => {
  const router = useRouter()
  const { support } = router.query
  console.log(data)
  return (
    <>
      <h1> Youhou {support}</h1>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ locales}) => {
  console.log('locales ==>', locales)
  const req = await axios.get('http://localhost:5050/api/albums')
  const data = await req.data
  console.log(data)
  return {
    props: {
      data,
    },
  }
}
export default Catalog
