import React, { useEffect, useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import { createTodo } from './src/graphql/mutations';
import { listTodos } from './src/graphql/queries';
import aws_exports from './aws-exports';
import { onCreateTodo } from './src/graphql/subscriptions';

API.configure(aws_exports)             // Configure Amplify
PubSub.configure(aws_exports)

const initialState = {todos:[]};
const reducer = (state, action) =>{
  switch(action.type){
    case 'QUERY':
      return {...state, todos:action.todos}
    case 'SUBSCRIPTION':
      return {...state, todos:[...state.todos, action.todo]}
    default:
      return state
  }
}

async function createNewTodo() {
  const todo = { name: "Use AppSync" , description: "Realtime and Offline"}
  await API.graphql(graphqlOperation(createTodo, { input: todo }))
}



export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    
    getData()
  }, [])

  useEffect(() => {
    //...other code
  
    const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
        next: (eventData) => {
          const todo = eventData.value.data.onCreateTodo;
          dispatch({type:'SUBSCRIPTION', todo})
        }
    })
    return () => subscription.unsubscribe()
  }, [])

  async function getData() {
    const todoData = await API.graphql(graphqlOperation(listTodos, {limit: 20}))
    dispatch({type:'QUERY', todos: todoData.data.listTodos.items});
  }

  return (
    <View style={styles.container}>
      <Button onPress={createNewTodo} title='Create Todo' />
      { state.todos.map((todo, i) => <Text key={todo.id}>{todo.name} : {todo.description}</Text>) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddeeff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});