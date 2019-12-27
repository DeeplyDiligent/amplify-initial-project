import Channels from "../components/channels/channels";
import messages from "../components/messages/messages";
import { NavigationAction } from "react-navigation";
import { EnumValues } from "enum-values";

/**
 * This is the helper methods for react-navigation
 */
enum Screen {
  Home,
  ChannelsPage
}
const getPage = (screen: Screen): (() => JSX.Element) => {
  switch (screen) {
    case Screen.Home:
      return messages;
    case Screen.ChannelsPage:
      return Channels;
  }
};

const switchTo = (
  navigation: (elem: any, data: any) => void,
  screen: Screen,
  data: Object
) => {
  navigation(Screen[screen], data);
};

const getRoutes = () => {
  let screens = EnumValues.getNames(Screen).map(screen => ({
    [screen]: { screen: getPage(Screen[screen as keyof typeof Screen]) }
  }));
  console.log(Object.assign({}, ...screens));
  return Object.assign({}, ...screens);
};

export { Screen as Screens, switchTo, getRoutes };
