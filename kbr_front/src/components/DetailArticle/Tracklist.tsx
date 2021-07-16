import { ListLi, ListOl, Text } from '../../styles/album'
import TitleColumn from './TitleColumn'
import RowOneColumn from '../Layout/RowOneColumn'

const title = 'tracklist'
const Tracklist = ({ tracklist }): JSX.Element => (
  <>
    <TitleColumn title={title} mb={20} />
    <RowOneColumn xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
      <ListOl>
        {tracklist.map(({ name, track }) => (
          <ListLi key={track}>
            <Text>{name}</Text>
          </ListLi>
        ))}
      </ListOl>
    </RowOneColumn>
  </>
)

export default Tracklist
