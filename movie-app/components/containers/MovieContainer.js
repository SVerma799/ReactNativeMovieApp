import React from "react";
import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base";
export default function MovieContainer() {
  const [selectedType, setSelectedType] = React.useState("now_playing");
  const filterSetting = ["now_playing", "popular", "top_rated", "upcoming"];
  return (
    <NativeBaseProvider>
      <Center py={4}>
        <Box>
          <Select
            selectedValue={selectedType}
            minWidth="200"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setSelectedType(itemValue)}
          >
            {filterSetting.map((setting, idx) => {
              return <Select.Item key={idx} label={setting} value={setting} />;
            })}
          </Select>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
