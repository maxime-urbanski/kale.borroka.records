import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create, SelectInput, ReferenceArrayInput,
} from 'react-admin';
import React from 'react';

export const ArtistList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="City.city" />
      <TextField source="Country.country" />
    </Datagrid>
  </List>
);

export const ArtistEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="City.city" />
      <TextInput source="Country.country" />
    </SimpleForm>
  </Edit>
);

export const ArtistCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <ReferenceArrayInput label="Ville: " source="CityId" reference="cities">
        <SelectInput optionText="city" />
      </ReferenceArrayInput>
      <ReferenceArrayInput label="Pays: " source="CountryId" reference="countries">
        <SelectInput optionText="country" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
