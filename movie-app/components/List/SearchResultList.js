import React from "react";
import { Button, HStack, Image, ScrollView, Text, VStack } from "native-base";
import MovieList from "./MovieList";

export default function SearchResultList({
  navigation,
  selectedType,
  searchResults,
}) {
  function RenderSelectedType(selectedType) {
    if (selectedType == "movie") {
      return <MovieList navigation={navigation} mvList={searchResults} />;
    }
  }

  return (
    <ScrollView>
      {RenderSelectedType(selectedType)}
      {/* <VStack>
        {searchResults.map((result) => {
          return (
            <HStack py={3} px={3}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${result.poster_path}`,
                }}
                alt={result.title}
                size="xl"
              ></Image>
              <VStack px={3}>
                <Text w="200">{result.title}</Text>
                <Text>{result.popularity}</Text>
                <Text>{result.release_date}</Text>
                <Button w="100%">More Details</Button>
              </VStack>
            </HStack>
          );
        })}
      </VStack> */}
    </ScrollView>
  );
}
