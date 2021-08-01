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

export const QuantityList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="quantity" />
    </Datagrid>
  </List>
);

export const QuantityEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <NumberInput source="quantity" />
    </SimpleForm>
  </Edit>
);

export const QuantityCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <NumberInput source="quantity" />
    </SimpleForm>
  </Create>
);
