import React from "react";
import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base";

const CustomSelect = ({ selectedType, selectedTypeChange, filterSettings }) => {
  return (
    <Center py={4}>
      <Select
        selectedValue={selectedType}
        minWidth="200"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemVale) => selectedTypeChange(itemVale)}
      >
        {filterSettings.map((setting, idx) => {
          return <Select.Item key={idx} label={setting} value={setting} />;
        })}
      </Select>
    </Center>
  );
};

export default CustomSelect;
