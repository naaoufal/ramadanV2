import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function Home () {
  return (
    <View>
      <View style={styles.container}>
          <Text>Reservation :</Text>
      </View>
      <View>
          <Card>
              <Card.Title>Selected Table : </Card.Title>
          </Card>
      </View>
      <View>
          <Text>Complet the Form : </Text>
          <TextInput
          placeholder={"Username"}
          />
          <TextInput
          placeholder={"Message"}
          />
          <TextInput
          placeholder={"Latitude"}
          />
          <TextInput
          placeholder={"Longitude"}
          />
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