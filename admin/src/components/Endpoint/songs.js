import {
  Create,
  Datagrid,
  Edit,
  List,
  ReferenceArrayInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const SongList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="Artist.name" />
    </Datagrid>
  </List>
);
export const SongEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="Artist.name" />
    </SimpleForm>
  </Edit>
);

export const SongCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <ReferenceArrayInput source="ArtistId" reference="artists" allowEmpty>
        <SelectInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
