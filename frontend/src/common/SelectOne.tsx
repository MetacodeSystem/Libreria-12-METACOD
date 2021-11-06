import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectOne<T>({options, getKeyValue, getDisplayValue, name, value, onChangeHandler}: SelectOneProps<T>) {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth style={{marginTop:'30px'}}>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={name}
          onChange={onChangeHandler}
          fullWidth
          style={{ textAlign:'start', padding:'5px'}}
          size='small'>
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
    </Box>
  );
}

interface SelectOneProps<T>{
    options: T[]
    name: string
    value: string
    getKeyValue: (iterate:T) => number,
    getDisplayValue: (iterate:T) => any,    onChangeHandler: ((event: SelectChangeEvent<string>) => void)
}
