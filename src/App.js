import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./components/Home";

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  About: { screen: About }
});

const App = createAppContainer(MainNavigator);

export default App;
