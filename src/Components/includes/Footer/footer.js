import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Footer extends Component {
    render(){
        return (
          <View style={styles.footerContainer}>
            <View style={styles.footerItem} >
                <Text > Inicio </Text>
            </View>
            <View style={styles.footerItem} >
                <Text > Normas </Text>
            </View>
            <View style={styles.footerItem} >
                <Text > Área </Text>
            </View>
            <View style={styles.footerItem} >
                <Text > Perfil </Text>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    footerContainer:{
        width:410,
        height:70,
        backgroundColor:"#9fc2ed",
        flexDirection:'row',
        alignItems: "center",
        justifyContent: "space-between",
  },
  footerItem: {
    backgroundColor:"#fff",
    width:101,
    height:70,
    justifyContent: "center",
    alignItems: "center",
  },
});
