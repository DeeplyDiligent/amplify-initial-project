import Channels from "../components/channels/channels";
import messages from "../components/messages/messages";
import { NavigationAction } from "react-navigation";
import { EnumValues } from "enum-values";

/**
 * This file contains helper methods for react-navigation
 * If there are new screens, here are the instructions to follow:
 *  1. Add a new enum to the `Screen` enum. Call it something like `[Name of Page]Page`
 *  2. Add the screen in the getPage function by creating a new case for Screen.NewPage and returning the component of the next page
 *  3. In the page where you would like to navigate to this new page, call switchTo, passing in:
 *        - The navigate function of the navigation prop (put navigation as a prop, and the call the function with navigation.navigate)
 *        - A screen from the enum of screens
 *        - Any data to pass to this new screen
 */

enum Screen {
  // Update this with the name of a new screen.
  Home,
  ChannelsPage
}
const getPage = (screen: Screen): (() => JSX.Element) => {
  // Update this with what screen to point the name defined above to go to.
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
