import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

//import { Home, About, Game, Login } from "./screens";
import Screens from "./screens";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Screens.Home },
    About: { screen: Screens.About },
    Game: { screen: Screens.Game },
    Login: { screen: Screens.Login }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {}
  }
);

const store = configureStore();
const Navigation = createAppContainer(MainNavigator);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
