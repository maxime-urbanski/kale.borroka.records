import { ListLi, ListOl, Text } from '../../styles/album'
import TitleColumn from './TitleColumn'
import RowOneColumn from '../Layout/RowOneColumn'

const Tracklist = ({ Album }): JSX.Element => {
  const title = 'tracklist'
  const tracklist = Album.Songs

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'space-evently',
      }}
    >
      <TitleColumn title={title} mb={20} />
      <RowOneColumn xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <ListOl>
          {tracklist.map(({ name, track }) => (
            <ListLi key={track}>
              <Text fontSize={12}>{name}</Text>
            </ListLi>
          ))}
        </ListOl>
      </RowOneColumn>
    </div>
  )
}

export default Tracklist
