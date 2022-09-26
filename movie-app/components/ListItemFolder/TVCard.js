import { move } from "formik";
import { Center, Divider, HStack, Image, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { getSepecificTvShow } from "../../services/api";
import Loading from "../layout/Loading";

export default function TVCard({ navigation, route }) {
  const tvShow_ID = route.params.tvShowId;
  const [tvShow, setTVShow] = useState({});

  useEffect(() => {
    getSepecificTvShow(tvShow_ID)
      .then((res) => {
        setTVShow(res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return Object.keys(tvShow).length == 0 ? (
    <Loading />
  ) : (
    <VStack>
      <Center>
        <Text fontSize="4xl" fontWeight="bold" py={6}>
          {tvShow?.name}
        </Text>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${tvShow?.poster_path}`,
          }}
          alt={tvShow?.name}
          size="2xl"
          mb={10}
        ></Image>
        <Text px={8} py={4}>
          {tvShow?.overview}
        </Text>
        <HStack>
          <Text>Popularity: </Text>
          <Text>{tvShow.popularity}</Text>
          <Divider orientation="vertical" ml={2} mr={2} />
          <Text>Release Date: </Text>
          <Text>{tvShow.first_air_date}</Text>
        </HStack>
      </Center>
    </VStack>
  );
}
