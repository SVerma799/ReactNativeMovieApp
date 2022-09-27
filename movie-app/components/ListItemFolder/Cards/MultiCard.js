import { move } from "formik";
import { Center, Divider, HStack, Image, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { getSepecificMovie } from "../../../services/api";
import Loading from "../../layout/Loading";

export default function MovieCard({ navigation, route }) {
  const movie_id = route.params.movieId;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getSepecificMovie(movie_id)
      .then((res) => {
        setMovie(res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return Object.keys(movie).length == 0 ? (
    <Loading />
  ) : (
    <VStack>
      <Center>
        <Text fontSize="4xl" fontWeight="bold" py={6}>
          {movie?.title}
        </Text>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
          }}
          alt={movie?.title}
          size="2xl"
          mb={10}
        ></Image>
        <Text px={8} py={4}>
          {movie?.overview}{" "}
        </Text>
        <HStack>
          <Text>Popularity: </Text>
          <Text>{movie.popularity}</Text>
          <Divider orientation="vertical" ml={2} mr={2} />
          <Text>Release Date: </Text>
          <Text>{movie.release_date}</Text>
        </HStack>
      </Center>
    </VStack>
  );
}
