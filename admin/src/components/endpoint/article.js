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
  TextInput, useQuery,
} from 'react-admin';

export const ArticleList = (props) => (
  <List {...props} title="Tous les articles disponible">
    <Datagrid rowClick="edit">
      <TextField source="items.id" />
      <TextField source="Album.name" />
      <NumberField source="Price.price" />
      <TextField source="Format.name" />
      <NumberField source="Quantity.quantity" />
    </Datagrid>
  </List>
);

export const ArticleEdit = (props) => {
  console.log(props)
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


export const CustomArticleEdit = (props) => {
  console.log(props)
  const { data, loading, error } = useQuery({ type: 'getOne', resource:'articles', payload: {
      support: 'lp', id: props.id
    }})
  if (loading) return <h1>loading</h1>;
  if (error) return <h1>{error}</h1>;
  if (!data) return null;

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
}
