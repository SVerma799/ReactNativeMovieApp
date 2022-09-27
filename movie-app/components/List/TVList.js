import React from "react";
import TVItem from "../ListItemFolder/TVItem";
import { ScrollView } from "native-base";

export default function TVList({ navigation, tvList }) {
  return (
    <ScrollView>
      {tvList.map((tvShow, idx) => {
        return <TVItem navigation={navigation} key={idx} tvShow={tvShow} />;
      })}
    </ScrollView>
  );
}
