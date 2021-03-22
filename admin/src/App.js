import "./App.css";
import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { dataProvider } from "./dataProvider";
import { AlbumCreate, AlbumList } from "./components/Endpoints/Album/album";
import { ArtistCreate, ArtistList } from "./components/Endpoints/Artist/artist";
import AlbumIcon from "@material-ui/icons/Album";
import MicIcon from "@material-ui/icons/Mic";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import FlagIcon from "@material-ui/icons/Flag";
import SaveIcon from "@material-ui/icons/Save";
import LabelIcon from "@material-ui/icons/Label";
import EuroIcon from "@material-ui/icons/Euro";
import AddIcon from "@material-ui/icons/Add";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import StyleIcon from "@material-ui/icons/Style";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  ArticleCreate,
  ArticleEdit,
  ArticleList,
} from "./components/Endpoints/Article/article";
import {
  CityCreate,
  CityEdit,
  CityList,
} from "./components/Endpoints/City/citiy";

import {
  FormatCreate,
  FormatEdit,
  FormatList,
} from "./components/Endpoints/Format/format";
import { LabelCreate, LabelList } from "./components/Endpoints/Label/label";
import {
  PriceCreate,
  PriceEdit,
  PriceList,
} from "./components/Endpoints/Price/price";
import {
  QuantityCreate,
  QuantityEdit,
  QuantityList,
} from "./components/Endpoints/Quantity/quantity";
import { SongCreate, SongList } from "./components/Endpoints/Song/song";
import {
  StyleCreate,
  StyleEdit,
  StyleList,
} from "./components/Endpoints/Style/style";
import {
  CountryCreate,
  CountryEdit,
  CountryList,
} from "./components/Endpoints/Country/country";

const App = () => {
  return (
    <>
      <Admin dashboard={Dashboard} dataProvider={dataProvider} disableTelemetry>
        <Resource
          name="albums"
          list={ListGuesser}
          icon={AlbumIcon}
          edit={EditGuesser}
          create={AlbumCreate}
          show={ShowGuesser}
        />
        <Resource
          name="articles"
          create={ArticleCreate}
          list={ArticleList}
          edit={ArticleEdit}
          icon={ShoppingBasketIcon}
        />
        <Resource
          name="artists"
          list={ArtistList}
          icon={MicIcon}
          edit={EditGuesser}
          create={ArtistCreate}
        />
        <Resource
          name="cities"
          list={CityList}
          icon={LocationCityIcon}
          edit={CityEdit}
          create={CityCreate}
        />
        <Resource
          name="countries"
          list={CountryList}
          edit={CountryEdit}
          create={CountryCreate}
          icon={FlagIcon}
        />
        <Resource
          name="formats"
          list={FormatList}
          icon={SaveIcon}
          edit={FormatEdit}
          create={FormatCreate}
        />
        <Resource
          name="labels"
          list={LabelList}
          icon={LabelIcon}
          edit={LabelList}
          create={LabelCreate}
        />
        <Resource
          name="prices"
          list={PriceList}
          icon={EuroIcon}
          edit={PriceEdit}
          create={PriceCreate}
        />
        <Resource
          name="quantities"
          list={QuantityList}
          icon={AddIcon}
          edit={QuantityEdit}
          create={QuantityCreate}
        />
        <Resource
          name="songs"
          list={SongList}
          icon={LibraryMusicIcon}
          edit={EditGuesser}
          create={SongCreate}
        />
        <Resource
          name="styles"
          list={StyleList}
          icon={StyleIcon}
          edit={EditGuesser}
          create={StyleCreate}
        />
        <Resource
          name="users"
          list={ListGuesser}
          icon={AccountCircleIcon}
          edit={StyleEdit}
          create={""}
        />
      </Admin>
    </>
  );
};

export default App;
