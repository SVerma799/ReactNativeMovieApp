import { Button, HStack, Image, ScrollView, Text, VStack } from "native-base";
import React from "react";
import MovieItem from "../ListItemFolder/MovieItem";

const MovieList = ({ navigation, mvList }) => {
  return (
    <ScrollView>
      {mvList.map((ml, idx) => {
        return <MovieItem key={idx} navigation={navigation} ml={ml} />;
      })}
    </ScrollView>
  );
};

export default MovieList;
