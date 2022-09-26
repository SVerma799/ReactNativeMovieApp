import { Button, HStack, Image, ScrollView, Text, VStack } from "native-base";
import React from "react";

export default function TVList({ navigation, tvList }) {
  return (
    <ScrollView>
      {tvList.map((tvShow, idx) => {
        return (
          <HStack py={4} key={idx}>
            <VStack px={4}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${tvShow.poster_path}`,
                }}
                alt="Alternate Text"
                size="xl"
              ></Image>
            </VStack>
            <VStack>
              <Text py={1} fontWeight="bold">
                {tvShow.name}
              </Text>
              <Text py={1}>{tvShow.first_air_date}</Text>
              <Text py={1}>{tvShow.popularity}</Text>
              <Button
                w="80%"
                onPress={() => {
                  navigation.navigate("TVShowItem", {
                    tvShowId: tvShow.id,
                  });
                  navigation.setOptions({ title: tvShow.title });
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
}
