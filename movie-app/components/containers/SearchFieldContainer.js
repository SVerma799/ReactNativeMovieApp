import CustomSelect from "../layout/CustomSelect";
import React, { useEffect, useState } from "react";
import Loading from "../layout/Loading";
import {
  VStack,
  FormControl,
  Input,
  NativeBaseProvider,
  Center,
  Select,
  CheckIcon,
  HStack,
  Button,
  Icon,
  Text,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { getSearchResult } from "../../services/api";
import SearchResultList from "../List/SearchResultList";

const SearchContainer = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState("movie");
  const mvFilterSetting = ["movie", "multi", "tv"];
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState({});

  function selectedTypeChange(itemValue) {
    setSelectedType(itemValue);
  }

  function onSubmit() {
    getSearchResult(selectedType, searchText)
      .then((res) => {
        setSearchResults(res.results);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }

  return (
    <VStack>
      <VStack width="90%" mx="6" my={6} maxW="300px">
        <FormControl isRequired>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Search Movie/TV Show Name
          </FormControl.Label>
          <Input
            placeholder="eg. James Bond, CSI"
            onChangeText={(value) => setSearchText(value)}
          />
          <FormControl.ErrorMessage
            _text={{
              fontSize: "xs",
            }}
          >
            Field cannot be left blank
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label
            _text={{
              bold: true,
            }}
          >
            Choose Search Type
          </FormControl.Label>

          <HStack>
            <Select
              mr={4}
              selectedValue={selectedType}
              minW="200"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemVale) => selectedTypeChange(itemVale)}
            >
              {mvFilterSetting.map((setting, idx) => {
                return (
                  <Select.Item key={idx} label={setting} value={setting} />
                );
              })}
            </Select>
            <Button
              minW="100"
              onPress={onSubmit}
              startIcon={<Icon as={<Ionicons />} name="ios-search" />}
            >
              Search
            </Button>
          </HStack>
          <FormControl.ErrorMessage
            _text={{
              fontSize: "xs",
            }}
          >
            Field cannot be left blank
          </FormControl.ErrorMessage>
        </FormControl>
      </VStack>
      {searchResults.length > 0 ? (
        <SearchResultList
          navigation={navigation}
          selectedType={selectedType}
          searchResults={searchResults}
        />
      ) : (
        <Center>
          <Text fontSize="xl" fontWeight="bold">
            Please Initiate a search...
          </Text>
        </Center>
      )}
    </VStack>
  );
};

export default SearchContainer;
