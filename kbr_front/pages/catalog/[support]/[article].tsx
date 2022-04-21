import { GetStaticProps } from 'next'
import { getData } from '../../../src/components/Data/data'
import { Container } from '../../../src/styles/styled'
import { AlbumProps } from '../../../src/Interface/interfaceData'
import Breadcrumb from '../../../src/components/Layout/BreadCrumb'
import RowTwoColumn from '../../../src/components/Layout/RowTwoColumn'
import Folder from '../../../src/components/DetailArticle/Folder'
import Slider from '../../../src/components/Layout/Slider'
import ArticleInformation from '../../../src/components/DetailArticle/ArticleInformation'

interface DiscProps {
  disc: AlbumProps
}

const Article = ({ disc }: DiscProps): JSX.Element => {
  const { Album, name, kbrProd, kbrNum, Format } = disc
  const { folder } = Album
  const title = name
  return (
    <>
      <Breadcrumb links={[Format.name, title]} />
      <Container fluid>
        <RowTwoColumn
          firstColumn={<Folder {...Album} />}
          secondColumn={<ArticleInformation {...disc} />}
          lg={6}
          xl={6}
          xxl={6}
          mb={150}
          position={'start'}
        />
      </Container>
    </>
  )
}

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const { support, article } = params
  const getDiscInformationUrl = `catalog/${support}/${article}`
  const disc = await getData(getDiscInformationUrl)
  return {
    props: {
      disc,
    },
  }
}

export default Article
