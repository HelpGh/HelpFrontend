import React from "react";
import { View, StyleSheet,Text } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
// import AnimatedText from "./AnimatedText";
import colors from "../config/colors";


function OfflineNotice(props) {

  const netInfo = useNetInfo();
  console.log('====================================');
  console.log(netInfo);
  console.log('====================================');

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        {/* <AnimatedText penColor={colors.white} color={colors.white} text="No Internet Connection..."/> */}
        <Text style={styles.text}>No Internet Connection..</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white
  },
});

export default OfflineNotice;
