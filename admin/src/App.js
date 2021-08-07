import * as React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./components/auth/auth";
import {resources} from "./components/data";
import CustomDataProvider from "./components/auth/CustomDataProvider";

const App = () => {
  return (
    <>
      <Admin dataProvider={CustomDataProvider} authProvider={authProvider}>
        {resources.map(({name, list, edit, create, icon}, index) => (
          <Resource name={name} list={list} edit={edit} create={create} icon={icon} key={index} />
        ))}
      </Admin>
    </>
  )
};
export default App;
