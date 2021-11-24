import React from 'react';
import {
  Create,
  Datagrid,
  Edit,
  List,
  NumberField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';

export const ArticleList = (props) =>{
  return (
    <>
      <List {...props} title="Tous les articles disponible" >
        <Datagrid rowClick="edit">
          <TextField source="items.id" />
          <TextField source="Album.name" />
          <NumberField source="Price.price" />
          <TextField source="Format.name" />
          <NumberField source="Quantity.quantity" />
        </Datagrid>
      </List>
    </>
  )};

export const ArticleEdit = (props) => {
  return (
    <Edit {...props} redirect="show">
      <SimpleForm>
        <ReferenceInput label="Choix de l'album" source="AlbumId" reference="albums">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Prix: " source="PriceId" reference="prices">
          <SelectInput optionText="price" />
        </ReferenceInput>
        <ReferenceInput label="Support: " source="FormatId" reference="formats">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Quantité: " source="QuantityId" reference="quantities">
          <SelectInput optionText="quantity" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
};

export const ArticleCreate = (props) => (
  <Create {...props} redirect="show">
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput label="Choix de l'album" source="AlbumId" reference="albums">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Prix: " source="PriceId" reference="prices">
        <SelectInput optionText="price" />
      </ReferenceInput>
      <ReferenceInput label="Support: " source="FormatId" reference="formats">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Quantité: " source="QuantityId" reference="quantities">
        <SelectInput optionText="quantity" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

