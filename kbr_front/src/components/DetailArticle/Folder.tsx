import { Picture } from '../../styles/album'
import RibbonCard from '../Article/Ribbon'


const Folder = ({ folder, fullName, kbrProd, kbrNum }) => {
  return (
    <div style={{'position': 'relative'}}>
      <RibbonCard kbrNum={kbrNum} kbrProd={kbrProd} />
      <Picture src={folder} alt={fullName} width={500} borderRadius={5}/>
    </div>
  )
}

export default Folder
