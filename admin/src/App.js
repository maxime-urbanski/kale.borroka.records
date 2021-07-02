import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import authProvider from "./components/auth/auth";
import {dataProvider} from "./components/auth/dataProvider";
const App = () => {
  return (
    <>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="albums" list={ListGuesser}/>
        <Resource name="articles" list={ListGuesser}/>
        <Resource name="artists" list={ListGuesser}/>
        <Resource name="cities" list={ListGuesser}/>
        <Resource name="countries" list={ListGuesser}/>
        <Resource name="formats" list={ListGuesser}/>
        <Resource name="labels" list={ListGuesser}/>
        <Resource name="prices" list={ListGuesser}/>
        <Resource name="quantities" list={ListGuesser}/>
        <Resource name="songs" list={ListGuesser}/>
        <Resource name="styles" list={ListGuesser}/>
        <Resource name="tracklists" list={ListGuesser}/>
        <Resource name="users" list={ListGuesser}/>
      </Admin>
    </>
  )
};
export default App;
