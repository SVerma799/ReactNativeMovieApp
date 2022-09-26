import CustomSelect from "../layout/CustomSelect";
import React, { useEffect, useState } from "react";
import MovieList from "../List/MovieList";
import { getMovies, getTvShowsAsPerType } from "../../services/api";
import Loading from "../layout/Loading";
import { Text } from "native-base";
import TVList from "../List/TVList";

export default function TVShowContainer({ navigation }) {
  const [selectedType, setSelectedType] = useState("airing_today");
  const [tvList, setTVList] = useState([]);
  const tvFilterSetting = [
    "airing_today",
    "on_air_today",
    "popular",
    "top_rated",
  ];

  useEffect(() => {
    getTvShows(selectedType);
  }, []);

  function selectedTypeChange(itemValue) {
    setSelectedType(itemValue);
    getTvShows(itemValue);
  }

  function getTvShows(type) {
    getTvShowsAsPerType(type).then((res) => {
      setTVList(res);
    });
  }
  return (
    <>
      <CustomSelect
        selectedType={selectedType}
        selectedTypeChange={selectedTypeChange}
        filterSettings={tvFilterSetting}
      />
      {tvList.length > 0 ? (
        <TVList navigation={navigation} tvList={tvList} />
      ) : (
        <Loading />
      )}
    </>
  );
}
