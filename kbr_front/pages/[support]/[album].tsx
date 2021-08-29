import { GetStaticPaths, GetStaticProps } from 'next'
import { useState } from 'react'
import { getData } from '../../src/components/Data/data'
import { HR } from '../../src/styles/styled'
import { ArticleName } from '../../src/styles/album'
import { AlbumProps } from '../../src/Interface/interfaceData'
import Tracklist from '../../src/components/DetailArticle/Tracklist'
import Breadcrumb from '../../src/components/Layout/BreadCrumb'
import RowOneColumn from '../../src/components/Layout/RowOneColumn'
import RowTwoColumn from '../../src/components/Layout/RowTwoColumn'
import Img from '../../src/components/DetailArticle/Img'
import details from '../../src/components/DetailArticle/Detail'

interface DiscProps {
  disc: AlbumProps
}

const Article = ({ disc }: DiscProps): JSX.Element => {
  const { Album, Format } = disc
  const { Artist, name, folder, kbrProd, kbrNum } = Album
  const title = `${Artist.name} - ${name}`
  const [quantity, setQuantity] = useState(0)
  console.log(disc)
  return (
    <>
      <Breadcrumb links={[Format.name, title]} />
      <RowOneColumn mb={80} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <ArticleName fontSize={45}>{title}</ArticleName>
      </RowOneColumn>
      <RowTwoColumn
        firstColumn={Img(folder, name,kbrProd, kbrNum)}
        secondColumn={details(disc, setQuantity)}
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={5}
        xxl={4}
        mb={150}
      />
      <HR color={'red'} />
      <Tracklist tracklist={disc.Album.Songs} />
    </>
  )
}

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  const { support, album } = params
  const getDiscInformationUrl = `articles/${support}/${album}`
  const disc = await getData(getDiscInformationUrl)
  console.log(disc)
  return {
    props: {
      disc,
    },
  }
}

export default Article
