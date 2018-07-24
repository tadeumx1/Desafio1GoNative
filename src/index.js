import React, {Component} from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';


import Post from 'components/Post'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      posts: [

        {

          title: 'Aprendendo React Native',
          author: "Diego Schell Fernandes",
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar vulputate egestas. Nulla tellus dui, pellentesque eget eleifend eget, pretium in magna.',

        },
        {

          title: 'Aprendendo React Native',
          author: "Diego Schell Fernandes",
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar vulputate egestas. Nulla tellus dui, pellentesque eget eleifend eget, pretium in magna.',

        },
        {
           
          title: 'Aprendendo React Native',
          author: "Diego Schell Fernandes",
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar vulputate egestas. Nulla tellus dui, pellentesque eget eleifend eget, pretium in magna.',

        },

      ]

    }

  }

  render() {
    return (

      <View style={styles.container}>

      <View style={styles.Header}>

        <Text style={styles.textTitle}> GoNative App</Text>

      </View>

      <View style={styles.PostContainer}>

        <ScrollView>

        {this.state.posts.map(post => (

          <Post /* key={post.Id} */ post={post}  /> 

        ))}

        </ScrollView>

      </View>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    // backgroundColor: '#111',

  },

  Header: {
    
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',

  },

  textTitle: {

    fontSize: 19,
    color: '#333333',
    fontWeight: 'bold',

  },

  PostContainer: {

    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EE7777',

  },
 
});
