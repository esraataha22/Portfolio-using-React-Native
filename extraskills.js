import {View , StyleSheet , Text , Row} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ExtraComponent() {

    return (
      <> 
      <View style={extrastyle.info}>
                    <Text style={extrastyle.lang}>Extra Skills</Text>
     </View>
     <br/>
      <view style={extrastyle.extra}>
          <View style={extrastyle.view}>
            <View style={extrastyle.skill}>
                <Icon name='cube' size={15} color={"gold"}> </Icon> 
                <Text style={extrastyle.text}>Bootstrap</Text>
            </View>
            <br/>
            <View style={extrastyle.skill}>
                <Icon name='cube' size={15} color={"gold"}> </Icon> 
                <Text style={extrastyle.text}>SQL Service</Text>
            </View>
            <br/>
            <View style={extrastyle.skill}>
                <Icon name='cube' size={15} color={"gold"}> </Icon> 
                <Text style={extrastyle.text}>Flutter</Text>
            </View>
            <br/>
            <View style={extrastyle.skill}>
                <Icon name='cube' size={15} color={"gold"}> </Icon> 
                <Text style={extrastyle.text}>MongoDB</Text>
            </View>
        </View>
        </view>
      </>
    )
  }
const extrastyle = StyleSheet.create ({
    extra:{
        display:'flex'
    },
    view:{
        flexDirection: 'column' ,
        justifyContent: 'space-between'
    },
    text:{
        color: 'white',
        marginLeft:8 ,
        fontSize:17 ,
        marginTop:-5
    },
    skill:{
        flexDirection: 'row',
    },
    info:{
        flexDirection: 'row',
    },
    lang:{
        color: 'white',
        fontSize:18,
        fontWeight: 'bold'    
    },

});
  