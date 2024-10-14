import { Text, View } from "react-native";
import React from "react";

class Index extends React.Component {
  render() {
    return (<View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>)
  };
}

export default Index;
