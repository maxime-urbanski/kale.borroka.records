import React from "react";
import {
  ArrayField,
  ArrayInput,
  ChipField,
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
  SingleFieldList,
  TextField,
  TextInput,
  RichTextField,
  ReferenceArrayInput,
  ImageField,
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
      <TextField source="Artist.name" label="Artist" />
      <TextField source="name" />
      <RichTextField source="note" />
      <ImageField source="folder" title="name" />
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
      <ArrayField source="Videos">
        <SingleFieldList>
          <ChipField source="youtube_url" />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);

export const AlbumEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="Artist.name" reference="artist">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput multiline source="note" />
      <TextInput source="folder" />
      <ReferenceArrayInput source="StyleId" reference="style">
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
  </Edit>
);

export const AlbumCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceArrayInput source="ArtistId" reference="artist">
        <SelectInput optionText="name" />
      </ReferenceArrayInput>
      <TextInput source="name" />
      <TextInput source="folder" />
      <TextInput source="note" />
      <ReferenceArrayInput source="StyleId" reference="style">
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
