import { ListLi, ListOl } from '../../styles/album'
import { Title3 } from '../../styles/styled'
import { tracklist } from '../Data/data'

const Tracklist = (): JSX.Element => (
  <>
    <ListOl>
      <Title3>TRACKLIST</Title3>
      {tracklist.map(({ name, track }) => (
        <ListLi key={track}>{name}</ListLi>
      ))}
    </ListOl>
  </>
)

export default Tracklist
