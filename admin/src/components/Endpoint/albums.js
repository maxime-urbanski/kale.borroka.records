import React from "react";
import {
  ArrayInput,
  ArrayField,
  Create,
  Datagrid,
  Edit,
  Filter,
  ReferenceInput,
  SelectInput,
  List,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextField,
  TextInput,
  ReferenceArrayInput,
  ImageField,
  SingleFieldList,
  ChipField,
} from "react-admin";

export const FilterData = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Artist" source="name" reference="artist" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const AlbumList = (props) => (
  <List filters={<FilterData />} {...props} title="Tous les albums">
    <Datagrid rowClick="edit">
      <TextField source="Artist.name" a />
      <TextField source="name" />
      <TextField source="note" />
      <ImageField source="folder" />
      <TextField source="Style" />
      <ArrayField source="Songs">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="Labels">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);

export const AlbumEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="note" />
      <TextInput source="folder" />
      <TextInput source="Artist.name" />
      <TextInput source="Style.name" />
      <ArrayInput source="Songs">
        <SimpleFormIterator>
          <TextInput source="name" />
          <NumberInput source="Tracklist.position" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="label">
        <SimpleFormIterator>
          <TextInput source="name" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="Videos" />
    </SimpleForm>
  </Edit>
);

export const AlbumCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceArrayInput source="ArtistId" reference="artists">
        <SelectInput optionText="name" />
      </ReferenceArrayInput>
      <TextInput source="name" />
      <TextInput source="folder" />
      <TextInput source="note" />
      <ReferenceArrayInput source="StyleId" reference="styles">
        <SelectInput optionText="name" />
      </ReferenceArrayInput>
      <ArrayInput source="tracklist">
        <SimpleFormIterator>
          <TextInput source="name" />
          <NumberInput source="track" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="labels">
        <SimpleFormIterator>
          <TextInput source="name" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
