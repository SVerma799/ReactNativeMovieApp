import { View, Text } from "react-native";
import React from "react";
import CustomTabView from "../components/layout/CustomTabView";
import MovieContainer from "../components/containers/MovieContainer";

export default function IndexScreen({ navigation }) {
  return <CustomTabView navigation={navigation} />;
}
