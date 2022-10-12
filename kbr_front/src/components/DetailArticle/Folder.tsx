import { Picture } from '../../styles/album'

const Folder = ({ folder, fullName, kbrProd, kbrNum }) => {
  return <Picture src={folder} alt={fullName} borderRadius={5} />
}

export default Folder
