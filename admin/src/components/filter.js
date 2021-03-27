import { Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin';

export const FilterData = (props, source, reference) => (
  <Filter {...props}>
    <ReferenceInput label="User" source={source} reference={reference} allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);