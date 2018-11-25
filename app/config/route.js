import { StackNavigator } from "react-navigation";
import App from "../components/index";
import Routeinfo from "../components/routeinfo";

export const Route = StackNavigator(
  {
    App: { screen: App },
    Routeinfo: {screen: Routeinfo}
  },
  {
    title: "",
    headerMode: "float"
  }
);
