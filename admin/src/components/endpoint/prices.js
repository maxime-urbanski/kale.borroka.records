import {
  Create,
  Datagrid,
  Edit,
  List,
  NumberField,
  NumberInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const PriceList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="price" />
    </Datagrid>
  </List>
);

export const PriceEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <NumberInput source="price" />
    </SimpleForm>
  </Edit>
);

export const PriceCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <NumberInput source="price" />
    </SimpleForm>
  </Create>
);
