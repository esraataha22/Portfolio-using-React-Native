import * as React from 'react';
import {StyleSheet, Image , View } from 'react-native';

export default function ImageComponent() {

    return (
        <>
            <View style={imgstyle.div}>
                <Image style={imgstyle.image} source={require('../assets/profile.png')} />
            </View>
        </>
    )
}

const imgstyle = StyleSheet.create ({
    div:{
        marginLeft:50,
        marginRight:50
    },
    image:{
        width:100 ,
        height:100,
        margin:20,
        borderRadius:50 ,
        borderColor: "white" ,
        borderLeftWidth:5,
        borderRightWidth:5,
        borderTopWidth:5,
        borderBottomWidth:5
      },
});