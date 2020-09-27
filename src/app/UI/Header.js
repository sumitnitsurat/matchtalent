import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export const Header = ({centerComponent}) => {
    return (
        <View style={styles.container}>
            <Text>this is header</Text>
            <Text>{centerComponent.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      position: 'absolute',
      backgroundColor: "#3700B3",
      color: "#fff",
      height: 56,
      width: "100%",
      top: 0,
      right: 0,
      left: 0
    },
});