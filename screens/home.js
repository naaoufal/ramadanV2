import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function Home () {
  return (
    <View>
      <View style={styles.container}>
          <Text>Select You Option :</Text>
      </View>
      <View>
          <Card>
              <Card.Title>Option 1</Card.Title>
          </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom : "30px"
  },
});
