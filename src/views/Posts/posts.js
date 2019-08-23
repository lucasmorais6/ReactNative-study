import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import  CardPosts from '../../Components/Posts/CardPosts/cardPosts.js'

export default class Posts extends Component {
    static navigationOptions = {
        title: 'Posts'
    };

    render(){
        return (
          <ScrollView style={styles.container}>
            <TouchableOpacity>
                {/* <Text> Meu Perfil </Text> */}
            </TouchableOpacity>
            <CardPosts />
            <CardPosts />
            <CardPosts />
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:20,
  },
});
