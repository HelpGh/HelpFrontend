import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{height:150,position:'relative'}}>
      <View style={styles.container}>
        <MaterialIcons name="shopping-cart" size={30} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
    borderRadius: 40,
    borderWidth:5,
    bottom: 20,
    height: 60,
    justifyContent: "center",
    width: 60,
    position:'relative',
    top:'-20%'
    // paddingBottom:40
  },
});

export default NewListingButton;
