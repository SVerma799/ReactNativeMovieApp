import { Button, HStack, Image, ScrollView, Text, VStack } from "native-base";

const TVItem = ({ navigation, tvShow }) => {
  return (
    <HStack py={4}>
      <VStack px={4}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${tvShow.poster_path}`,
          }}
          alt={tvShow.name}
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
};

export default TVItem;
