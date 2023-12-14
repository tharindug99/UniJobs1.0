import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const SetScreen = () => {
  return (
    <View style={styles.allSetToGo}>
      <Text style={styles.youAreSet}>You are set to go now..</Text>
      <Image
        style={styles.tickCircleSvgrepocomIcon}
        source={require("../assets/images/tick.png")}
      />
      <Image
        style={styles.okRafiki11}
        source={require("../assets/images/All_set_to_go.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  youAreSet: {
    marginLeft: -129,
    top: 451,
    left: "50%",
    fontSize: 32,
    letterSpacing: 3.7,
    lineHeight: 34,
    fontWeight: "500",
    color: "#019f99",
    textAlign: "center",
    width: 262,
    height: 100,
    position: "absolute",
  },
  tickCircleSvgrepocomIcon: {
    top: 591,
    left: 125,
    width: 112,
    height: 107,
    position: "absolute",
  },
  okRafiki11: {
    top: 100,
    left: 28,
    width: 305,
    height: 278,
    position: "absolute",
  },
  allSetToGo: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SetScreen;
