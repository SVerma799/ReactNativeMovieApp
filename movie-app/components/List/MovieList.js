import { Button, HStack, Image, ScrollView, Text, VStack } from "native-base";
import React from "react";

const MovieList = ({ navigation, mvList }) => {
  return (
    <ScrollView>
      {mvList.map((mv, idx) => {
        return (
          <HStack py={4} key={idx}>
            <VStack px={4}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${mv.poster_path}`,
                }}
                alt="Alternate Text"
                size="xl"
              ></Image>
            </VStack>
            <VStack>
              <Text py={1}>{mv.title}</Text>
              <Text py={1}>{mv.release_date}</Text>
              <Text py={1}>{mv.popularity}</Text>
              <Button
                w="80%"
                onPress={() => {
                  navigation.navigate("MovieItem", {
                    movieId: mv.id,
                  });
                  // navigation.setOptions({ title: mv.title });
                }}
              >
                More Details
              </Button>
            </VStack>
          </HStack>
        );
      })}
    </ScrollView>
  );
};

export default MovieList;
