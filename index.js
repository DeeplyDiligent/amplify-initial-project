import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import Amplify from 'aws-amplify';

import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports)
AppRegistry.registerComponent(appName, () => App);
