import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const FormatList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
      <TextField source="icon" />
    </Datagrid>
  </List>
);

export const FormatEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="slug" />
      <TextInput source="icon" />
    </SimpleForm>
  </Edit>
);

export const FormatCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="slug" />
      <TextInput source="icon" />
    </SimpleForm>
  </Create>
);
