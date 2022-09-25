import { Text } from "native-base";
import React from "react";

const MovieList = ({ mvList }) => {
  return (
    <>
      {mvList.map((mv) => {
        return <Text>{mv.title}</Text>;
      })}
    </>
  );
};

export default MovieList;
