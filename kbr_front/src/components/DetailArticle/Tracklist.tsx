import { ListLi, ListOl, Text } from '../../styles/album'
import { tracklist } from '../Data/data'
import TitleColumn from './TitleColumn'
import RowComponent from '../Layout/RowComponent'

const title = 'tracklist'
const Tracklist = (): JSX.Element => (
  <>
    <TitleColumn title={title} mb={20} />
    <RowComponent xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
      <ListOl>
        {tracklist.map(({ name, track }) => (
          <ListLi key={track}>
            <Text>{name}</Text>
          </ListLi>
        ))}
      </ListOl>
    </RowComponent>
  </>
)

export default Tracklist
