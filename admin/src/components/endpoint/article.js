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
import  { useState, useEffect } from 'react'
import  axios from 'axios'

export const ArticleList = (props) =>{
  return (
    <>
      <List {...props} title="Tous les articles disponible" >
        <Datagrid rowClick="edit">
          <TextField source="items.id" />
          <TextField source="items.slug" />
          <TextField source="Album.name" />
          <NumberField source="Price.price" />
          <TextField source="Format.name" />
          <NumberField source="Quantity.quantity" />
        </Datagrid>
      </List>
    </>
  )};

export const ArticleEdit = (props) => {
  const [ slug, setSlug ] = useState()
  const [ data, setData ] = useState([])

  useEffect(() => {
    const backUrl = process.env.REACT_APP_BACK_URL
    const url = backUrl + props.location.pathname
    const fetchDataForSlug = async (slugArticle) => {
      const req = await axios.get(slugArticle)
      const res = await req.data
      const getArtistName = res.Album.Artist.name.toLowerCase()
      const getAlbumName = res.Album.name.toLowerCase()
      const albumSlug = `/${getArtistName}-${getAlbumName}`.replace(' ', '-')
      setSlug(albumSlug)
    }
    fetchDataForSlug(url)
  },[])

  return (
    <Edit {...props} redirect="show">
      <SimpleForm>
        <ReferenceInput label="Choix de l'album" source="AlbumId" reference="albums">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="Prix: " source="PriceId" reference="prices">
          <SelectInput optionText="price" />
        </ReferenceInput>
        <TextInput source={slug} />
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

export const ArticleCreate = (props) => {
  console.log(props)
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

