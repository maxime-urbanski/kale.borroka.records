import { Picture } from '../../styles/album'

const Folder = ({ folder, fullName, kbrProd, kbrNum }) => {
  return (
    <>
      <Picture src={folder} alt={fullName} width={500} borderRadius={5} />
    </>
  )
}

export default Folder
