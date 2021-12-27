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
            <TextField source="id" />
            <TextField source="slug" />
            <TextField source="Album.fullName" label={"Nom de l'article"}/>
            <NumberField source="Price.price" label={"Prix"}/>
            <TextField source="Format.name" label={"Support"}/>
            <NumberField source="Quantity.quantity" label={"Quantité"}/>
          </Datagrid>
        </List>
      </>
  )};

export const ArticleEdit = (props) => (
    <Edit {...props} redirect="show">
      <SimpleForm>
        <ReferenceInput label="Choix de l'album" source="AlbumId" reference="albums">
          <SelectInput optionText="fullName" />
        </ReferenceInput>
        <ReferenceInput label="Prix: " source="PriceId" reference="prices">
          <SelectInput optionText="price" />
        </ReferenceInput>
        <TextInput source={"slug"} />
        <ReferenceInput label="Support: " source="FormatId" reference="formats">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Quantité: " source="QuantityId" reference="quantities">
          <SelectInput optionText="quantity" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
);

export const ArticleCreate = (props) => {
  return (
      <Create {...props} redirect="show">
        <SimpleForm>
          <TextInput source="id" />
          <TextInput source="slug" />
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
  )
};

