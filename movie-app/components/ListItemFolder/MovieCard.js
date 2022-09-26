import { move } from "formik";
import { HStack, Image, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { getSepecificMovie } from "../../services/api";

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
  return (
    <VStack>
      <Text>{movie?.title}</Text>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
        }}
        alt={movie?.title}
        size="xl"
      ></Image>
      <Text>{movie?.overview}</Text>
      <HStack>
        <Text>Popularity</Text>
        <Text>{movie.popularity}</Text>
      </HStack>
      <HStack>
        <Text>Release Date</Text>
        <Text>{movie.release_date}</Text>
      </HStack>
    </VStack>
  );
}
