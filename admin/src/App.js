import * as React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./components/auth/auth";
import {dataProvider} from "./components/auth/dataProvider";
import {resources} from "./components/data";

const App = () => {
  return (
    <>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        {resources.map(({name, list, edit, create, icon}) => (
          <Resource name={name} list={list} edit={edit} create={create} icon={icon} />
        ))}
      </Admin>
    </>
  )
};
export default App;
