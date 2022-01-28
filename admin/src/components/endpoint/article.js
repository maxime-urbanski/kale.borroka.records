import React, { useState, useEffect } from 'react';
import { instance } from "../fetchData"
import {
  Create,
  Datagrid,
  Edit,
  List,
  NumberInput,
  NumberField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';

export const ArticleList = (props) => {
  return (
    <>
      <List {...props} title="Tous les articles disponible" >
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="slug" />
          <TextField source="Format.name" label={"Support"}/>
          <NumberField source="price" />
          <NumberField source="quantity" />
        </Datagrid>
      </List>
    </>
  )};

export const ArticleEdit = (props) => {
  const [format, setFormat] = useState([]);

  useEffect(() => {
    const fetchFormat = async () => {
      try {
        const req = await instance.get('/formats');
        const res = await req.data.items;
        setFormat(res)
      } catch (e) {
        throw new Error(e)
      }
    };
    fetchFormat()
  },[]);

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="Album.fullName" />
        <TextInput source="slug" />
        <NumberInput source="price" />
        <NumberInput source="quantity" />
        <ReferenceInput label="Support: " source="FormatId" reference="formats">
          <SelectInput optionText="name"  />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )};

export const ArticleCreate = (props) => (
  <Create {...props} redirect="show">
    <SimpleForm>
      <ReferenceInput label="Choix de l'album" source="AlbumId" reference="albums">
        <SelectInput optionText="fullName" />
      </ReferenceInput>
      <TextInput source="name" label="Nom de l'article"/>
      <NumberInput source="price" label="Prix de l'article"/>
      <NumberInput source="quantity" label="Quantité disponible"/>
      <ReferenceInput label="Support: " source="FormatId" reference="formats">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

