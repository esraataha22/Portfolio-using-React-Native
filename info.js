import {View , Text , StyleSheet} from 'react-native';

export default function InfoComponent() {

    return (
        <>
            <View style={infostyle.view}>
                <View style={infostyle.info}>
                    <Text style={infostyle.text}>Age:</Text>
                </View>
                <View>
                    <Text style={infostyle.text}>23</Text>
                </View>
            </View>
            <br/>
            <View style={infostyle.view}>
                <View style={infostyle.info}>
                    <Text style={infostyle.text}>Residence:</Text>
                </View>
                <View>
                    <Text style={infostyle.text}>DO</Text>
                </View>
            </View>
            <br/>
            <View style={infostyle.view}>
                <View style={infostyle.info}>
                    <Text style={infostyle.text}>Freelancer:</Text>
                </View>
                <View>
                    <Text style={infostyle.text}>Available</Text>
                </View>
            </View>
            <br/>
            <View style={infostyle.view}>
                <View style={infostyle.info}>
                    <Text style={infostyle.text}>Address:</Text>
                </View>
                <View>
                    <Text style={infostyle.text}>Bani Suef</Text>
                </View>
            </View>
        </>
    )
}

const infostyle = StyleSheet.create ({
    view:{
       flexDirection: 'row' ,
       justifyContent: 'space-between' 
      },
    info:{
        backgroundColor: 'gold',
        borderWidth:1,
        borderColor: 'white'
    },
    text:{
        color: 'white',
        alignItems: 'center',        
    }

});