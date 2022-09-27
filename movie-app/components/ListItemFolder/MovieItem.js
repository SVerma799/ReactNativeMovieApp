import { Button, HStack, Image, ScrollView, Text, VStack } from "native-base";

const MovieItem = ({ navigation, ml }) => {
  return (
    <HStack py={4}>
      <VStack px={4}>
        {ml.poster_path === null ? (
          <></>
        ) : (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original/${ml?.poster_path}`,
            }}
            alt={ml.title}
            size="xl"
          ></Image>
        )}
      </VStack>
      <VStack>
        <Text py={1}>{ml?.title}</Text>
        <Text py={1}>{ml?.release_date}</Text>
        <Text py={1}>{ml?.popularity}</Text>
        <Button
          w="80%"
          onPress={() => {
            navigation.navigate("MovieItem", {
              movieId: ml.id,
            });
            // navigation.setOptions({ title: mv.title });
          }}
        >
          More Details
        </Button>
      </VStack>
    </HStack>
  );
};

export default MovieItem;
