import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MuiSelect = (props) => {
  const [selectState, setSelectState] = useState(props.selectState);

  const handleChange = (event) => {
    setSelectState(event.target.value);
  };

  return (
    <Box>
      <FormControl hiddenLabel>
        <InputLabel></InputLabel>
        <Select value={selectState} label="" onChange={handleChange}>
          {props.items.map((item, idx) => (
            <MenuItem key={idx} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

MuiSelect.propTypes = {
  selectState: PropTypes.any,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.any,
    })
  ),
};

export default MuiSelect;
