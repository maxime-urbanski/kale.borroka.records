import {
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  Edit,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const LabelList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="logo" />
      <BooleanField source="friend" />
    </Datagrid>
  </List>
);

export const LabelEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="logo" />
      <BooleanInput source="friend" />
    </SimpleForm>
  </Edit>
);

export const LabelCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="logo" />
      <BooleanInput source="friend" />
    </SimpleForm>
  </Create>
);
