import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  List,
  NumberField,
  NumberInput,
  ReferenceArrayInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const ArticleList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="Album.name" />
      <NumberField source="Price.price" />
      <TextField source="Format.name" />
      <NumberField source="Quantity.quantity" />
    </Datagrid>
  </List>
);

export const ArticleEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceArrayInput reference="album">
        <TextInput source="name" />
      </ReferenceArrayInput>
      <NumberInput source="Price.price" />
      <TextInput source="Format.name" />
      <NumberInput source="Quantity.quantity" />
    </SimpleForm>
  </Edit>
);

export const ArticleCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="Album.name" />
      <NumberInput source="Price.price" />
      <TextInput source="Format.name" />
      <NumberInput source="Quantity.quantity" />
    </SimpleForm>
  </Create>
);
