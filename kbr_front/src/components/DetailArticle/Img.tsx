import { Overlay, Ribbon } from '../../styles/card'
import { Picture } from '../../styles/album'

const Img = (img: string, name: string, kbrProd: boolean, kbrNum: number): JSX.Element => (
  <div style={{ position: 'absolute' }}>
    {kbrProd && (
      <Overlay>
        <Ribbon>KBR#{kbrNum}</Ribbon>
      </Overlay>
    )}
    <Picture src={img} alt={name} width={500} borderRadius={5} />
  </div>
)

export default Img
