import React, {useState} from 'react';
import { DatePicker } from '@mui/x-date-pickers';

function DateInput() {
  const [selected, setSelected] = useState();

  const handleSelect = (newValue) => {
    setSelected(newValue)
  }

  return (
    <DatePicker
      label="Birthday"
      value={selected}
      sx={{
        height: '40px',
        width: '100%',
        fontSize: '16px',
        color: '#495057',
        textIndent: 6
      }}
      onChange={(newValue) => handleSelect(newValue)}
    />
  );
}
export { DateInput };
