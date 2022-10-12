//12 Oct 2022
import React, { useState } from "react"; //library for building user interface
import { //these are elements from "import - react"
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
  Switch,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import bulbOff from "./assets/the-light/bulb-off.jpg";
import bulbOn from "./assets/the-light/bulb-on.jpg";

export default function TheLight() {

  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      {/* https://docs.expo.io/versions/latest/sdk/status-bar */}
      <StatusBar style="light" />
      {/* this are prop or properties - arguements passed into React components */}
      {/* it holds the information that influence the output/display */}

      <Image
        fadeDuration = {0}
        source = {isEnable ? bulbOn : bulbOff}
        style = {styles.image}  
      />
      {/* https://reactnative.dev/doc/docs/switch */}
      <Switch
        trackColor = {{ false: "#fff", true: "#52d964"}}
        thumbColor = {"#fff"}
        onValueChange = {toggleSwitch}
        value = {isEnable}
        style = {styles.switch}
      />
    </SafeAreaView>
  );
}

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    maxWidth: "100%",
    maxHeight: screenHeight - Constants.statusBarHeight - 150,
    resizeMode: "contain",
    marginBottom: 20
  },
  switch: {
    alignSelf: "center",
    // https://reactnative.dev.docs/transforms
    // https://reactnative.dev/docs/platform-specific-code
    transform: Platform.OS === "android" ? [{scale: 1.5}]: []
  }
});
