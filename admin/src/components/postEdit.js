import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput disable source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);
