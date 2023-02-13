import {View , Text , StyleSheet} from 'react-native';
import ProgressBar from 'react-native-progress-bar-horizontal';



export default function LangComponent() {

    return (
        <>
            <View >
                <View style={langstyle.info}>
                    <Text style={langstyle.lang}>Languages</Text>
                </View>
                <View>
                    <Text style={langstyle.text}>Arabic</Text>
                    <ProgressBar progress={1}
                                borderWidth={1}
                                fillColor="gold"
                                unfilledColor="#1A252f"
                                height={10}
                                borderColor="gold"
                                duration={100} />
                </View>   
                <br/>
                <View>
                    <Text style={langstyle.text}>French</Text>
                    <ProgressBar progress={0.5}
                                borderWidth={1}
                                fillColor="gold"
                                unfilledColor="#1A252f"
                                height={10}
                                borderColor="gold"
                                duration={100} />
                </View> 
                <br/>
                <View>
                    <Text style={langstyle.text}>English</Text>
                    <ProgressBar progress={0.75}
                                borderWidth={1}
                                fillColor="gold"
                                unfilledColor="#1A252f"
                                height={10}
                                borderColor="gold"
                                duration={100} 
                                width={200}/>
                </View>   
                <br/>
                <View>
                    <Text style={langstyle.text}>Turkish</Text>
                    <ProgressBar progress={0.3}
                                borderWidth={1}
                                fillColor="gold"
                                unfilledColor="#1A252f"
                                height={10}
                                borderColor="gold"
                                duration={100} />
                </View>   
            </View>
            <br/>
        </>
    )
}

const langstyle = StyleSheet.create ({
    info:{
        flexDirection: 'row',
        margin:5
    },
    lang:{
        color: 'white',
        fontSize:18,
        fontWeight: 'bold'    
    },
    text:{
        fontSize:16,
        color: 'white',
        margin:5
    },

});