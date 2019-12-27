import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import messages from './src/components/messages/messages';
import API, { graphqlOperation } from "@aws-amplify/api";
import PubSub from "@aws-amplify/pubsub";
import aws_exports from "./src/util/aws-exports";
import { Auth } from "aws-amplify";

API.configure(aws_exports);
Auth.configure(aws_exports);
PubSub.configure(aws_exports);

const MainNavigator = createStackNavigator({
  Home: {screen: messages},
});

const App = createAppContainer(MainNavigator);

export default App;