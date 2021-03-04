import { Create, Datagrid, Edit, List, SimpleForm, TextField, TextInput } from "react-admin";

export const CountryList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="country" />
      <TextField source="tag" />
    </Datagrid>
  </List>
);

export const CountryEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="country" />
      <TextInput source="tag" />
    </SimpleForm>
  </Edit>
);

export const CountryCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="country" />
      <TextInput source="tag" />
    </SimpleForm>
  </Create>
);