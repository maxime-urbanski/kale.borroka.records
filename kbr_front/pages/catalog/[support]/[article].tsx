import { GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'
import { getData } from '../../../src/components/Data/data'
import { HR, Container } from '../../../src/styles/styled'
import { ArticleName } from '../../../src/styles/album'
import { AlbumProps } from '../../../src/Interface/interfaceData'
import Tracklist from '../../../src/components/DetailArticle/Tracklist'
import Breadcrumb from '../../../src/components/Layout/BreadCrumb'
import RowOneColumn from '../../../src/components/Layout/RowOneColumn'
import RowTwoColumn from '../../../src/components/Layout/RowTwoColumn'
import Img from '../../../src/components/DetailArticle/Img'
import Slider from '../../../src/components/Layout/Slider'
import Folder from '../../../src/components/DetailArticle/Folder'


interface DiscProps {
  disc: { AlbumProps }
}

const Article = ({ disc }: DiscProps): JSX.Element => {
  const { Album, name,  kbrProd, kbrNum, Format } = disc
  const {folder } = Album
  const title = name
  const [quantity, setQuantity] = useState(0)
  return (
    <>
      <Breadcrumb links={[Format.name, title]} />
      <Container fluid>
        <RowTwoColumn
          firstColumn={<Folder {...Album} />}
          secondColumn={<Slider {...disc} />}
          xs={12}
          sm={12}
          md={12}
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
