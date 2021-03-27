import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  List,
  ReferenceArrayInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

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
      <TextInput source="Cities.city" />
      <TextInput source="Countries.country" />
    </SimpleForm>
  </Edit>
);

export const ArtistCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <ReferenceArrayInput source="CityId" reference="cities">
        <SelectInput optionText="city" />
      </ReferenceArrayInput>
      <ReferenceArrayInput source="CountryId" reference="countries">
        <SelectInput optionText="country" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
