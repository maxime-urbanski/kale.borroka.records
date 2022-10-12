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
    <Container fluid>
      <Breadcrumb links={[Format.name, title]} />
      <RowTwoColumn
        firstColumn={<Folder {...Album} />}
        secondColumn={<ArticleInformation {...disc} />}
        lg={7²}
        xl={7²}
        xxl={7²}
        mb={150}
        position={'start'}
      />
    </Container>
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
