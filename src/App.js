import { createStackNavigator, createAppContainer } from "react-navigation";

import Screens from "./screens";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Screens.Home },
    About: { screen: Screens.About },
    Game: { screen: Screens.Game }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {}
  }
);

const App = createAppContainer(MainNavigator);

export default App;
