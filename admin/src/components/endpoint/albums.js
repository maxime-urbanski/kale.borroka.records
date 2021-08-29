import React from 'react';
import {
  ArrayInput,
  ArrayField,
  Create,
  DateField,
  Datagrid,
  DateInput,
  BooleanInput,
  BooleanField,
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
  ChipField, NumberField,
} from 'react-admin';

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
      <TextField label="Artiste" source="Artist.name" />
      <TextField label={'Nom de l\'album'} source="name" />
      <TextField source="note" />
      <ImageField label="Pochette" source="folder" />
      <BooleanField label="KBR PROD" source="kbrProd" />
      <NumberField source="kbrNum" />
      <DateField source="releaseDate" />
      <TextField label="Style" source="Style.name" />
      <ArrayField label="Tracklist" source="Songs">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField label="Produit par" source="Labels">
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
      <TextInput label={'Nom de l\'album'} source="name" />
      <TextInput label={'Info sur l\'album'} source="note" />
      <TextInput label="Pochette" source="folder" />
      <TextInput label={'Nom de l\'artiste'} source="Artist.name" />
      <TextInput label="Style" source="Style.name" />
      <BooleanInput source="kbrProd" />
      <NumberInput label="Numero de production" source="kbrNum" />
      <DateInput source="releaseDate" />
      <ArrayInput label="tracklist" source="Songs">
        <SimpleFormIterator>
          <TextInput label="Titre de la chanson" source="name" />
          <NumberInput label="Numéro de piste" source="Tracklist.position" />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput label="Liste des labels" source="label">
        <SimpleFormIterator>
          <TextInput label="Produit par" source="name" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput label="Video Youtube" source="Videos" />
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
      <BooleanInput source="kbrProd" />
      <NumberInput label="Numero de production" source="kbrNum" />
      <DateInput source="releaseDate" />
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
