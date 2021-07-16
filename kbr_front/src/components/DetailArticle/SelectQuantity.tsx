import { Select } from '../../styles/album'
import React from 'react'

const SelectQuantity = (quantityAvailable: number[], valueQuantity): JSX.Element => (
  <Select onChange={valueQuantity}>
    {quantityAvailable.map((quantity) => (
      <option value={quantity} key={quantity}>
        {quantity}
      </option>
    ))}
  </Select>
)

export default SelectQuantity
