import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";

export const App = () => {
  return (
    <Fragment>
      <View>
        <Text>Test</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: "absolute",
    right: 0
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400"
  },
  highlight: {
    fontWeight: "700"
  }
});
