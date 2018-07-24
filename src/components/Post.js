import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default class Post extends Component {

    render() {

        return (

          <View style={styles.container}>

            <Text style={styles.postTitle}>{this.props.post.title}</Text>

            <Text style={styles.postAuthor}>{this.props.post.author}</Text>

            <Text style={styles.postDescription}>{this.props.post.description}</Text>

          </View>

        );

      }

}

const styles = StyleSheet.create ({

    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 9,
        marginHorizontal:20,
        padding: 20,
        marginVertical: 20,

    },

    postTitle: {

        alignSelf: 'flex-start',
        fontSize: 19,
        color: '#333333',
        fontWeight: 'bold',
    
      },

    postAuthor: {

        color: '#111',
        alignSelf: 'flex-start',
        paddingBottom: 5,

    },

    postDescription: {

        color: '#111',
        paddingTop: 5,
        borderTopWidth: 1,
        borderTopColor:'#EEEEEE',

    }

});