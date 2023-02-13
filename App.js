import {Text, View, StyleSheet, Button, Linking, ScrollView, Hr } from 'react-native';
import ImageComponent from "./components/image"
import IconComponent from './components/icon';
import InfoComponent from './components/info';
import LangComponent from './components/language';
import SkillsComponent from './components/skill';
import ExtraComponent from './components/extraskills';
import ButtonComponent from './components/button';
export default function App() {
  
  return (
    <>
    <ScrollView>
      <View style={style.body}>
      <view style={style.view}>
        <View>
          <ImageComponent/>
          <View style={style.divinfo}>
            <Text style={style.name}>Esraa Taha</Text>
            <br/>
            <Text style={style.text}>Front End Developeer</Text>
          </View>
          <br/>
          <IconComponent/>
          <br/>
          <hr style={style.hr}/>
          <br/>
          <InfoComponent/>
          <br/>
          <hr style={style.hr}/>
          <LangComponent/>
          <hr style={style.hr}/>
          <SkillsComponent/>
          <hr style={style.hr}/>
          <br/>
          <ExtraComponent/>
          <br/>
          <hr style={style.hr}/>
          <br/> <br/> <br/> <br/>
          <ButtonComponent/>
          <br/> <br/>
        </View>

      </view>
      </View>
    </ScrollView>
    </>
  )
}
const style = StyleSheet.create({
  body:{
    // flex:1,
    flexDirection: "row", 
    backgroundColor: "#2F3F4D",
    alignItems: "center", 
    justifyContent: "space-evenly"    
  },
  view: {
    backgroundColor: "#1A252f",
    justifyContent: "center",
    display:'flex',
    width: 300,  
  },
  name:{
    color: 'white',
    fontSize:28,
    fontWeight: "bold"
  },
  text: {
    color:"white"
  },
  hr: {
    width:220,
    color: 'white', 
  },
  divinfo:{
    textAlign: 'center'
  }

});
