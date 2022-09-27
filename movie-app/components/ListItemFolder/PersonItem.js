import { Button, HStack, Image, ScrollView, Text, VStack } from "native-base";

export default function PersonItem({ navigation, pItem }) {
  return (
    <HStack py={4}>
      <VStack px={4}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500//${pItem?.profile_path}`,
          }}
          alt={pItem.name}
          size="xl"
        ></Image>
      </VStack>
      <VStack>
        <Text py={1} fontWeight="bold">
          {pItem.name}
        </Text>
        <Text py={1}>{pItem.first_air_date}</Text>
        <Text py={1}>{pItem.popularity}</Text>
        <Button
          w="80%"
          onPress={() => {
            navigation.navigate("TVShowItem", {
              tvShowId: pItem.id,
            });
            navigation.setOptions({ title: pItem.title });
          }}
        >
          More Details
        </Button>
      </VStack>
    </HStack>
  );
}
