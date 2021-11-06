import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelect<T>({options, getKeyValue, getDisplayValue,findById, name, value, onChangeHandler}:MultipleSelectProps<T>) {
  const theme = useTheme();

  return (
    <div style={{marginTop:'30px'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-name-label">{name}</InputLabel>
        <Select fullWidth
          size="small"
          style={{padding:'5px'}}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={value}
          onChange={onChangeHandler}
          input={<OutlinedInput style={{textAlign:'start'}} label={name} fullWidth />}
          MenuProps={MenuProps}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip color='primary' key={value} label={findById(value)} />
              ))}
            </Box>
          )}        >
          {options.map((option) => (
            <MenuItem
              key={getKeyValue(option)}
              value={getKeyValue(option)}
            >
              <Chip style={{marginRight:'3px'}} label={`Id: ${getKeyValue(option)} `}/><strong>{getDisplayValue(option)}</strong>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

interface MultipleSelectProps<T>{
  options: T[]
    getKeyValue: (iterate:T) => number,
    getDisplayValue: (iterate:T) => any,    findById: (id:number) => any, 
    name: string
    value: number[]
    onChangeHandler: ((event: SelectChangeEvent<number[]>) => void)
}

