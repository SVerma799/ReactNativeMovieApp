import { SceneMap, TabView } from "react-native-tab-view";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Animated, Pressable } from "react-native";
import { Box, Center, useColorModeValue, View, VStack } from "native-base";
import MovieContainer from "../containers/MovieContainer";

const CustomTabView = ({ navigation }) => {
  const FirstRoute = () => <MovieContainer />;

  const SecondRoute = () => (
    <Center flex={1} my="4">
      This is Tab 2
    </Center>
  );

  const ThirdRoute = () => (
    <Center flex={1} my="4">
      This is Tab 3
    </Center>
  );

  const FourthRoute = () => (
    <Center flex={1} my="4">
      This is Tab 4{" "}
    </Center>
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "Tab 1",
    },
    {
      key: "second",
      title: "Tab 2",
    },
    {
      key: "third",
      title: "Tab 3",
    },
    {
      key: "fourth",
      title: "Tab 4",
    },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
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
