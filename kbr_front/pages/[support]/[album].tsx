import { Row, Column, Container } from '../../src/styles/styled'
import { ArticleName, Picture, AlbumInfo } from '../../src/styles/album'
import Breadcrumb from '../../src/components/Layout/BreadCrumb'
import { useRouter } from 'next/router'

const Article = (): JSX.Element => {
  const router = useRouter()
  const { album } = router.query

  return (
    <Container>
      <Row position={'start'}>
        <Column xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Breadcrumb array={['lp', `${album}`]} />
        </Column>
      </Row>
      <Row position={'start'}>
        <Column xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
          <Picture
            src={'/img/1725109.jpg'}
            alt={'ok'}
            width={400}
            height={400}
            mL={100}
            borderRadius={5}
          />
        </Column>
        <Column xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
          <Row>
            <Column xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <ArticleName fontSize={50}>{album} death brigade - bad bad accents</ArticleName>
            </Column>
          </Row>
          <Row position={'start'}>
            <Column xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
              <AlbumInfo>City: Moscow, Country: Russie</AlbumInfo>
              <AlbumInfo>STYLE: Rap, Punk</AlbumInfo>
              <AlbumInfo>Album Release: 20/04/2020</AlbumInfo>
            </Column>
            <Column xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
              <Picture src={'/img/vinyl.svg'} width={50} height={50}/>
              <AlbumInfo>STYLE: Rap, Punk</AlbumInfo>
              <AlbumInfo>Album Release: 20/04/2020</AlbumInfo>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  )
}

export default Article
