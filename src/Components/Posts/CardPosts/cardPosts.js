import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CardPosts extends Component {
    render(){
        return (
          <View style={styles.container}>
            <Text style={styles.postTitle} >Post title</Text>
            <Text style={styles.postDescription} >
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, dolor in vehicula posuere, eros orci malesuada mi, nec posuere velit leo ac risus. Ut maximus purus at suscipit porttitor. Pellentesque sodales tincidunt diam, sit amet suscipit nulla tempor eu. Duis vestibulum tellus risus, ac convallis nulla gravida at. Nulla mollis sapien erat, eu cursus eros hendrerit in. Sed lacinia sem et condimentum pretium. Nulla vestibulum odio tortor, sit amet dictum diam fringilla id. Cras imperdiet eget lacus sed tincidunt. Curabitur sed nisl dignissim, laoreet est ut, cursus lacus. Nam pulvinar leo ac pellentesque lacinia.</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    borderRadius:3,
    padding:10,
    marginTop:10,
    backgroundColor: '#f22767',

  },
  postTitle: {
    fontSize:18,
    fontWeight:'bold'
  },
  postDescription: {
    marginTop:10,
  },
});
