import { BanLogo, Title1, Title2 } from '../../styles/styled'
import { ImgNavTop } from '../../styles/navbar'

const Ban = (): JSX.Element => {
  return (
    <>
      <BanLogo>
        <Title1>Kale Borroka</Title1>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <ImgNavTop src="/img/Flag/antifa.svg" />
          <Title2>Riot Records</Title2>
          <ImgNavTop src="/img/Flag/antifa.svg" />
        </div>
      </BanLogo>
    </>
  )
}
export default Ban
