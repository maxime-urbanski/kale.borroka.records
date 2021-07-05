import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import authProvider from "./components/auth/auth";
import {dataProvider} from "./components/auth/dataProvider";
import {AlbumList,AlbumCreate, AlbumEdit} from "./components/Endpoint/albums";
import {ArtistCreate, ArtistEdit, ArtistList} from "./components/Endpoint/artists";
import {CityCreate, CityEdit, CityList} from "./components/Endpoint/cities";
import {CountryCreate, CountryEdit, CountryList} from "./components/Endpoint/countries";
import {FormatCreate, FormatEdit, FormatList} from "./components/Endpoint/formats";
import {LabelCreate, LabelEdit, LabelList} from "./components/Endpoint/labels";
import {ArticleCreate, ArticleEdit, ArticleList} from "./components/Endpoint/article";
import {PriceCreate, PriceEdit, PriceList} from "./components/Endpoint/prices";
import {QuantityCreate, QuantityEdit, QuantityList} from "./components/Endpoint/quantities";
import {SongCreate,SongEdit,SongList} from "./components/Endpoint/songs";
import {StyleCreate, StyleEdit, StyleList} from "./components/Endpoint/styles";

const App = () => {
  return (
    <>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="albums" list={AlbumList} edit={AlbumEdit} create={AlbumCreate} />
        <Resource name="articles" list={ListGuesser} edit={ArticleEdit} create={ArticleCreate} />
        <Resource name="artists" list={ArtistList} edit={ArtistEdit} create={ArtistCreate} />
        <Resource name="cities" list={CityList} edit={CityEdit} create={CityCreate} />
        <Resource name="countries" list={CountryList} edit={CountryEdit} create={CountryCreate} />
        <Resource name="formats" list={FormatList} edit={FormatEdit} create={FormatCreate} />
        <Resource name="labels" list={LabelList} edit={LabelEdit} create={LabelCreate} />
        <Resource name="prices" list={PriceList} edit={PriceEdit} create={PriceCreate} />
        <Resource name="quantities" list={QuantityList} edit={QuantityEdit} create={QuantityCreate} />
        <Resource name="songs" list={SongList} edit={SongEdit} create={SongCreate} />
        <Resource name="styles" list={StyleList} edit={StyleEdit} create={StyleCreate}/>
        <Resource name="tracklists" list={ListGuesser} />
        <Resource name="users" list={ListGuesser} />
      </Admin>
    </>
  )
};
export default App;
