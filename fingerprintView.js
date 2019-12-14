import React, { useEffect, useReducer, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Modal,
  Image,
  TouchableHighlight,
  AppState
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
import * as LocalAuthentication from "expo-local-authentication";

export default FingerprintView = ({ children = false }) => {
    const [fingerprint, setFingerprint] = useState({});
    const [fingerModalVisible, setFingerModalVisible] = useState(false);

    useEffect(()=>{
        authenticate();
        AppState.addEventListener('change', this._handleAppStateChange);
        return function cleanup() {
            AppState.removeEventListener('change', this._handleAppStateChange);
        }
    },[])

    _handleAppStateChange = (nextAppState) => {
        if (
          nextAppState === 'active'
        ) {
          authenticate();
        }
      };

    const FingerModal = () => (
        <Modal
        animationType="slide"
        transparent={true}
        visible={fingerModalVisible}
        onShow={this.scanFingerPrint}>
        <View style={styles.modal}>
            <View style={styles.innerContainer}>
            <Text>Sign in with fingerprint</Text>
            <Image
                style={{ width: 128, height: 128 }}
                source={require("./assets/fingerprint.png")}
            />
            <TouchableHighlight
                onPress={async () => {
                LocalAuthentication.cancelAuthenticate();
                setFingerModalVisible(!fingerModalVisible);
                }}>
                <Text style={{ color: "red", fontSize: 16 }}>Cancel</Text>
            </TouchableHighlight>
            </View>
        </View>
        </Modal>
    );

    const authenticate = async () => {
        setFingerModalVisible(true);
        let result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Scan your finger."
        });
        console.log("Scan Result:", result);
        setFingerModalVisible(false);
        setFingerprint(result);
    };

    return (
        <View style={{ flex: 1 }}>
        <FingerModal></FingerModal>
        {children(authenticate, fingerprint)}
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddeeff",
    flex: 1
  },
  modal: {
    flex: 1,
    marginTop: "0%",
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center"
  },
  innerContainer: {
    marginTop: "80%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
