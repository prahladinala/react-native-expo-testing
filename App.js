import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("APP EXECUTED")
  return (
    <View style={styles.container}>
      <Text>https://prahladinala.com</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f15025',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
