import { Overlay, Ribbon } from '../../styles/card'
import { Picture } from '../../styles/album'

const Img = (img: string, name: string, kbrProd: boolean): JSX.Element => (
  <div style={{ position: 'absolute' }}>
    {kbrProd && (
      <Overlay>
        <Ribbon>KBR#01</Ribbon>
      </Overlay>
    )}
    <Picture src={img} alt={name} width={500} borderRadius={5} />
  </div>
)

export default Img
