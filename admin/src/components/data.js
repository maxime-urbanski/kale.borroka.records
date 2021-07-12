import {AlbumCreate, AlbumEdit, AlbumList} from "./Endpoint/albums";
import {ArticleCreate, ArticleEdit, ArticleList} from "./Endpoint/article";
import {ArtistCreate, ArtistEdit, ArtistList} from "./Endpoint/artists";
import {CityCreate, CityEdit, CityList} from "./Endpoint/cities";
import {CountryCreate, CountryEdit, CountryList} from "./Endpoint/countries";
import {FormatCreate, FormatEdit, FormatList} from "./Endpoint/formats";
import {LabelCreate, LabelEdit, LabelList} from "./Endpoint/labels";
import {PriceCreate, PriceEdit, PriceList} from "./Endpoint/prices";
import {QuantityCreate, QuantityEdit, QuantityList} from "./Endpoint/quantities";
import {SongCreate, SongEdit, SongList} from "./Endpoint/songs";
import {StyleCreate, StyleEdit, StyleList} from "./Endpoint/styles";
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
