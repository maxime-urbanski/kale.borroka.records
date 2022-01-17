import AlbumIcon from '@material-ui/icons/Album';
import DescriptionIcon from '@material-ui/icons/Description';
import MicIcon from '@material-ui/icons/Mic';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FlagIcon from '@material-ui/icons/Flag';
import RadioIcon from '@material-ui/icons/Radio';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import StyleIcon from '@material-ui/icons/Style';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import PeopleIcon from '@material-ui/icons/People';
import { StyleCreate, StyleEdit, StyleList } from './endpoint/styles';
import { SongCreate, SongEdit, SongList } from './endpoint/songs';
import { LabelCreate, LabelEdit, LabelList } from './endpoint/labels';
import { FormatCreate, FormatEdit, FormatList } from './endpoint/formats';
import { CountryCreate, CountryEdit, CountryList } from './endpoint/countries';
import { CityCreate, CityEdit, CityList } from './endpoint/cities';
import { ArtistCreate, ArtistEdit, ArtistList } from './endpoint/artists';
import {ArticleCreate, ArticleEdit, ArticleList } from './endpoint/article';
import { AlbumCreate, AlbumEdit, AlbumList } from './endpoint/albums';

export const resources = [
  {
    name: 'albums', list: AlbumList, edit: AlbumEdit, create: AlbumCreate, icon: AlbumIcon,
  },
  {
    name: 'articles', list: ArticleList, edit: ArticleEdit,create: ArticleCreate, icon: DescriptionIcon,
  },
  {
    name: 'artists', list: ArtistList, edit: ArtistEdit, create: ArtistCreate, icon: MicIcon,
  },
  {
    name: 'cities', list: CityList, edit: CityEdit, create: CityCreate, icon: LocationCityIcon,
  },
  {
    name: 'countries', list: CountryList, edit: CountryEdit, create: CountryCreate, icon: FlagIcon,
  },
  {
    name: 'formats', list: FormatList, edit: FormatEdit, create: FormatCreate, icon: AlbumIcon,
  },
  {
    name: 'labels', list: LabelList, edit: LabelEdit, create: LabelCreate, icon: RadioIcon,
  },
  {
    name: 'songs', list: SongList, edit: SongEdit, create: SongCreate, icon: LibraryMusicIcon,
  },
  {
    name: 'styles', list: StyleList, edit: StyleEdit, create: StyleCreate, icon: StyleIcon,
  },
  {
    name: 'tracklists', list: AlbumList, edit: AlbumEdit, create: AlbumCreate, icon: FormatListNumberedIcon,
  },
  {
    name: 'user', list: AlbumList, edit: AlbumEdit, create: AlbumCreate, icon: PeopleIcon,
  },
];
