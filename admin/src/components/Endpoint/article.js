import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  List,
  NumberField,
  NumberInput,
  ReferenceArrayInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const ArticleList = (props) => (
  <List {...props} title="Tous les articles disponible">
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
  <Edit {...props} redirect="show">
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
  <Create {...props} redirect="show">
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceArrayInput label="Choix de l'album" source="AlbumId" reference="albums">
        <SelectInput optionText="name" />
      </ReferenceArrayInput>
      <ReferenceInput label="Prix: " source="PriceId" reference="prices">
        <SelectInput optionText="price" />
      </ReferenceInput>
      <ReferenceArrayInput label={'Support: '} source="FormatId" reference="formats">
        <SelectInput optionText="name" />
      </ReferenceArrayInput>
      <ReferenceInput label={'Quantité: '} source="QuantityId" reference="quantities">
        <SelectInput optionText="quantity" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
