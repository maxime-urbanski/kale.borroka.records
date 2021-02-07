import "./App.css";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/userList";
import { PostList } from "./components/postList";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  return (
    <>
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="posts" list={PostList} />
      </Admin>
    </>
  );
};

export default App;
