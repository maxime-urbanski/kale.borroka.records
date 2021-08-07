import {AlbumCreate, AlbumEdit, AlbumList} from "./endpoint/albums";
import {ArticleCreate, ArticleEdit, ArticleList} from "./endpoint/article";
import {ArtistCreate, ArtistEdit, ArtistList} from "./endpoint/artists";
import {CityCreate, CityEdit, CityList} from "./endpoint/cities";
import {CountryCreate, CountryEdit, CountryList} from "./endpoint/countries";
import {FormatCreate, FormatEdit, FormatList} from "./endpoint/formats";
import {LabelCreate, LabelEdit, LabelList} from "./endpoint/labels";
import {PriceCreate, PriceEdit, PriceList} from "./endpoint/prices";
import {QuantityCreate, QuantityEdit, QuantityList} from "./endpoint/quantities";
import {SongCreate, SongEdit, SongList} from "./endpoint/songs";
import {StyleCreate, StyleEdit, StyleList} from "./endpoint/styles";
import AlbumIcon from "@material-ui/icons/Album";
import DescriptionIcon from "@material-ui/icons/Description";
import MicIcon from "@material-ui/icons/Mic";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import FlagIcon from "@material-ui/icons/Flag";
import RadioIcon from "@material-ui/icons/Radio";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import StyleIcon from "@material-ui/icons/Style";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import PeopleIcon from "@material-ui/icons/People";
import { ListGuesser } from 'react-admin'

export const resources = [
  {
    name: "albums", list: AlbumList, edit: AlbumEdit, create:AlbumCreate , icon: AlbumIcon,
  },
  {
    name: "articles", list: ArticleList, edit: ArticleEdit, create:ArticleCreate , icon: DescriptionIcon,
  },
  {
    name: "artists", list: ArtistList, edit: ArtistEdit, create:ArtistCreate , icon: MicIcon,
  },
  {
    name: "cities", list: CityList, edit: CityEdit, create:CityCreate , icon: LocationCityIcon,
  },
  {
    name: "countries", list: CountryList, edit: CountryEdit, create:CountryCreate , icon: FlagIcon,
  },
  {
    name: "formats", list: FormatList, edit: FormatEdit, create:FormatCreate , icon: AlbumIcon,
  },
  {
    name: "labels", list: LabelList, edit: LabelEdit, create:LabelCreate , icon: RadioIcon,
  },
  {
    name: "prices", list: PriceList, edit: PriceEdit, create:PriceCreate , icon: MonetizationOnIcon,
  },
  {
    name: "quantities", list: QuantityList, edit: QuantityEdit, create:QuantityCreate , icon: ExposurePlus1Icon,
  },
  {
    name: "songs", list: SongList, edit: SongEdit, create:SongCreate , icon: LibraryMusicIcon,
  },
  {
    name: "styles", list: StyleList, edit:StyleEdit, create:StyleCreate , icon: StyleIcon,
  },
  {
    name: "tracklists", list: AlbumList, edit: AlbumEdit, create:AlbumCreate , icon: FormatListNumberedIcon,
  },
  {
    name: "user", list: AlbumList, edit: AlbumEdit, create:AlbumCreate , icon: PeopleIcon,
  },
]
