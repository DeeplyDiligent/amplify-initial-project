import React, { useEffect, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { Connect, withAuthenticator } from "aws-amplify-react-native";
import API, { graphqlOperation } from "@aws-amplify/api";
import PubSub from "@aws-amplify/pubsub";
import { createDoctor } from "./src/graphql/mutations";
import { subscribeDoctors } from "./src/graphql/subscriptions";
import { listDoctors } from "./src/graphql/queries";
import aws_exports from "./aws-exports";
import { onCreateDoctor } from "./src/graphql/subscriptions";
import { Auth } from "aws-amplify";

API.configure(aws_exports);
Auth.configure(aws_exports);
PubSub.configure(aws_exports);

const initialState = { todos: [] };
const reducer = (state, action) => {
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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function unsubscribe() {
    const subscription = API.graphql(
      graphqlOperation(onCreateDoctor)
    ).subscribe({
      next: eventData => {
        const todo = eventData.value.data.onCreateDoctor;
        dispatch({ type: "SUBSCRIPTION", todo });
      }
    });
    subscription.unsubscribe();
  }

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
        <Connect query={graphqlOperation(listDoctors, { limit: 20 })}>
          {({ data: { listDoctors  } }) => {
            listDoctors = listDoctors?listDoctors["items"]:[];
            return listDoctors.map((doctor)=>(
              <Text>{doctor.email}:{doctor.id}</Text>
            ))
          }}
        </Connect>
        <Button onPress={createNewTodo} title="Create Tod" />

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddeeff",
    flex: 1
  }
});

export default withAuthenticator(App);
