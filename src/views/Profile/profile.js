
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Profile extends Component {
    render(){
        return (
          <View style={styles.container}>
            <Text>Tela de perfil</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8cde9b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

