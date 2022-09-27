import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieCard from "../components/ListItemFolder/Cards/MovieCard";
import TVCard from "../components/ListItemFolder/Cards/TVCard";
import IndexScreen from "../screens/IndexScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{
            title: "Movie App",
            headerStyle: {
              backgroundColor: "#2c3e50",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="MovieItem"
          component={MovieCard}
          options={{ title: "Movie Item" }}
        ></Stack.Screen>

        <Stack.Screen
          name="TVShowItem"
          component={TVCard}
          options={{ title: "Tv Show Item" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
