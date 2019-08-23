import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import  Posts from './src/views/Posts/posts.js'
import  Profile from './src/views/Profile/profile.js'
import  Footer from './src/Components/includes/Footer/footer.js'

export default class App extends Component {
    render(){
        return (
          <View style={styles.body}>
              <View style={styles.container}>
                <Posts />
              </View>
            <Footer />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop:30,
        backgroundColor:"#333",
  },
  container:{
    flex: 1,
  },
});
