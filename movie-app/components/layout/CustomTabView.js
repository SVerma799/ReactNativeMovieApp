import { SceneMap, TabView } from "react-native-tab-view";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Animated, Pressable } from "react-native";
import { Box, Center, useColorModeValue, View, VStack } from "native-base";
import MovieContainer from "../containers/MovieContainer";
import TVShowContainer from "../containers/TVShowContainer";
import SearchFieldContainer from "../containers/SearchFieldContainer";

const CustomTabView = ({ navigation }) => {
  const FirstRoute = () => <MovieContainer navigation={navigation} />;

  const SecondRoute = () => <SearchFieldContainer />;

  const ThirdRoute = () => <TVShowContainer navigation={navigation} />;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "Movie",
    },
    {
      key: "second",
      title: "Search Results",
    },
    {
      key: "third",
      title: "Tv Shows",
    },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue("#000", "#e5e5e5")
              : useColorModeValue("#1f2937", "#a1a1aa");
          const borderColor =
            index === i
              ? "cyan.500"
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              key={i}
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer"
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  const initialLayout = {
    width: Dimensions.get("window").width,
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    />
  );
};

export default CustomTabView;
