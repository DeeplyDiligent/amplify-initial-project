import React, { useEffect, useReducer, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableHighlight,
  AppState
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

type FingerprintViewProps = {
  children:any
}
const FingerprintView = ({ children }: FingerprintViewProps) => {
  const [fingerprint, setFingerprint] = useState({});
  const [fingerModalVisible, setFingerModalVisible] = useState(false);
  let returningFromFingerprint = false;
  useEffect(() => {
    authenticate();
    AppState.addEventListener("change", _handleAppStateChange);
    return function cleanup() {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);
  const _handleAppStateChange = (nextAppState:string) => {
    if (nextAppState === "active" && !returningFromFingerprint) {
      // console.log('appstate active and returning from fingerprint = ',returningFromFingerprint)
      authenticate();
    } else if (returningFromFingerprint) {
      // console.log('set rff false')
      returningFromFingerprint = false;
    }
  };
  const FingerModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={fingerModalVisible}
    >
      <View style={styles.modal}>
        <View style={styles.innerContainer}>
          <Text>Sign in with fingerprint</Text>
          <Image
            style={{ width: 128, height: 128 }}
            source={require("../../assets/fingerprint.png")}
          />
          <TouchableHighlight
            onPress={async () => {
              LocalAuthentication.cancelAuthenticate();
              setFingerModalVisible(!fingerModalVisible);
            }}
          >
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
    returningFromFingerprint = true;
    console.log("Scan Result:", result);
    setFingerModalVisible(false);
    setFingerprint(result);
    // console.log('settingreturningfromfingerprint', returningFromFingerprint)
  };
  const showAuthenticate = () => {
    returningFromFingerprint = true;
    authenticate();
  };
  return (
    <View style={{ flex: 1 }}>
      <FingerModal></FingerModal>
      {children(showAuthenticate, fingerprint)}
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
export default FingerprintView;
