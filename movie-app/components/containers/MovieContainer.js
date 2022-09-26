import CustomSelect from "../layout/CustomSelect";
import React, { useEffect, useState } from "react";
import MovieList from "../List/MovieList";
import { getMovies } from "../../services/api";
import Loading from "../layout/Loading";
import { Text } from "native-base";

export default function MovieContainer({ navigation }) {
  const [selectedType, setSelectedType] = useState("now_playing");
  const [mvList, setMVList] = useState([]);

  useEffect(() => {
    getMovieAsPerType(selectedType);
  }, []);

  function selectedTypeChange(itemValue) {
    setSelectedType(itemValue);
    getMovieAsPerType(itemValue);
  }

  function getMovieAsPerType(type) {
    getMovies(type).then((res) => {
      setMVList(res);
    });
  }
  return (
    <>
      <CustomSelect
        selectedType={selectedType}
        selectedTypeChange={selectedTypeChange}
      />
      {mvList.length > 0 ? (
        <MovieList navigation={navigation} mvList={mvList} />
      ) : (
        <Loading />
      )}
    </>
  );
}
