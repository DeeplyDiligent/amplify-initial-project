import React, { useEffect, useReducer, useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { Connect, withAuthenticator } from "aws-amplify-react-native";

import FingerprintView from "../../util/fingerprintView";
import { createDoctor } from "../../graphql/mutations";
import { listDoctors } from "../../graphql/queries";
import { onCreateDoctor } from "../../graphql/subscriptions";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { switchTo, Screens } from "../../util/router";

const initialState = { todos: [] };
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "QUERY":
      return { ...state, todos: action.todos };
    case "SUBSCRIPTION":
      return { ...state, todos: [...state.todos, action.todo] };
    default:
      return state;
  }
};
async function createNewTodo() {
  const todo = { name: "Use AppSync", description: "Realtime and Offline" };
  await API.graphql(graphqlOperation(createDoctor, { input: todo }));
}
type MessagesProps = {
  navigation: any;
};
const Messages = ({ navigation }: MessagesProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function unsubscribe() {
    const subscription = API.graphql(
      graphqlOperation(onCreateDoctor)
    ).subscribe({
      next: (eventData: any) => {
        const todo = eventData.value.data.onCreateDoctor;
        dispatch({ type: "SUBSCRIPTION", todo });
      }
    });
    subscription.unsubscribe();
  }
  function logout() {
    Auth.signOut({ global: true })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  return (
    <View style={{ flex: 1 }}>
      <FingerprintView>
        {(authenticate: () => void, isAuthenticated: boolean) =>
          isAuthenticated ? (
            <KeyboardAvoidingView
              behavior="padding"
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center"
              }}>
              <Connect query={graphqlOperation(listDoctors, { limit: 20 })}>
                {(result: any) => {
                  let listDoctors: Array<any> = result.data.listDoctors
                    ? result.data.listDoctors["items"]
                    : [];
                  return listDoctors.map((doctor: any) => (
                    <Text key={doctor.id}>
                      {doctor.email}:{doctor.id}
                    </Text>
                  ));
                }}
              </Connect>
              <Button onPress={createNewTodo} title="Create Tod" />
              <Button onPress={logout} title="Logout" />
              <Button onPress={authenticate} title="Scan" />
              <Button
                onPress={() =>
                  switchTo(navigation.navigate, Screens.ChannelsPage, {})
                }
                title="Channels"
              />

              <TextInput
                style={{
                  height: 40,
                  width: 30,
                  borderColor: "gray",
                  borderWidth: 1,
                  alignSelf: "center"
                }}
              />
            </KeyboardAvoidingView>
          ) : (
            <View>You did not authenticate</View>
          )
        }
      </FingerprintView>
    </View>
  );
};
export default withAuthenticator(Messages);
