import "./App.css";
import { Admin, ListGuesser, Resource } from "react-admin";
import AlbumIcon from "@material-ui/icons/Album";
import { Dashboard } from "./components/Dashboard";
import { dataProvider } from "./dataProvider";

const App = () => {
  return (
    <>
      <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="artist" list={ListGuesser} />
        <Resource name="album" list={ListGuesser} icon={AlbumIcon} />
      </Admin>
    </>
  );
};

export default App;
