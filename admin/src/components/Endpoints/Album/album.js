import React from "react";
import {
  ArrayField,
  ArrayInput,
  ChipField,
  Create,
  Datagrid,
  Edit,
  List,
  NumberInput,
  ReferenceField,
  SimpleForm,
  SimpleFormIterator,
  SingleFieldList,
  TextField,
  TextInput,
} from "react-admin";

export const AlbumList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="Artist.name" label="Artist" />
      <TextField source="name" />
      <TextField source="note" />
      <TextField source="folder" />
      <TextField source="Style.name" label="Style" />
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
      <TextInput multiline source="note" />
      <TextInput source="folder" />
      <TextInput source="Artist.name" />
      <TextInput source="Style.name" />
      <ArrayInput source="Songs">
        <SimpleFormIterator>
          <TextInput source="name" />
          <NumberInput source="track" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="Labels">
        <SimpleFormIterator>
          <TextInput source="name" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export const AlbumCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="note" />
      <TextInput source="folder" />
      <ReferenceField source="ArtistId" reference="artist">
        <TextInput source="name" />
      </ReferenceField>
      <TextInput source="Style.name" />
      <ArrayInput source="Songs">
        <SimpleFormIterator>
          <TextInput source="name" />
          <NumberInput source="track" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="Labels">
        <SimpleFormIterator>
          <TextInput source="name" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
