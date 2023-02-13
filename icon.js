import * as React from 'react';
import {View , StyleSheet , Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function IconComponent() {

    return (
      <>
          <View style={iconstyle.view}>
            <Icon name='facebook-square' size={30} color={"gold"} onPress={() => {
              Linking.openURL('https://www.facebook.com/');
            }}></Icon>
            <Icon name='twitter-square' size={30} color={"gold"} onPress={() => {
              Linking.openURL('https://www.twitter.com/');
            }}></Icon>
            <Icon name='linkedin-square' size={30} color={"gold"} onPress={() => {
              Linking.openURL('https://www.linkedin.com/');
            }}></Icon>
            <Icon name='instagram' size={30} color={"gold"} onPress={() => {
              Linking.openURL('https://www.instagram.com/');
            }}></Icon>
            <Icon name='whatsapp' size={30} color={"gold"} onPress={() => {
              Linking.openURL('https://www.watsapp.com/');
            }}></Icon>
        </View>
      </>
    )
  }
const iconstyle = StyleSheet.create ({
 view:{
    flexDirection: 'row' ,
    justifyContent: 'space-between'
 }
});
  