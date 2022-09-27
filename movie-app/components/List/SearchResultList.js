import React from "react";
import { Button, HStack, Image, ScrollView, Text, VStack } from "native-base";
import MovieList from "./MovieList";
import TVList from "./TVList";
import MultiList from "./MultiList";

export default function SearchResultList({
  navigation,
  selectedType,
  searchResults,
}) {
  function RenderSelectedType(selectedType) {
    if (selectedType == "movie") {
      return <MovieList navigation={navigation} mvList={searchResults} />;
    } else if (selectedType == "tv") {
      return <TVList navigation={navigation} tvList={searchResults} />;
    } else {
      return <MultiList navigation={navigation} multiList={searchResults} />;
    }
  }

  return (
    <ScrollView>
      {RenderSelectedType(selectedType)}
    </ScrollView>
  );
}
