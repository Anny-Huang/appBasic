import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CalgaryScreen from "./Calgary";
import EdmontonScreen from "./Edmonton";

const Tab = createBottomTabNavigator();

export default function CityTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#222" },
          headerTintColor: "#fff",
          tabBarStyle: { backgroundColor: "#111" },
          tabBarActiveTintColor: "#fff",
        }}
      >
        <Tab.Screen name="Calgary" component={CalgaryScreen} />
        <Tab.Screen name="Edmonton" component={EdmontonScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
