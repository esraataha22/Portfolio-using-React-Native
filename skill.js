import {View , Text , StyleSheet} from 'react-native';
import ProgressBar from 'react-native-progress-bar-horizontal';



export default function SkillsComponent() {

    return (
        <>
            <View >
                <View style={langstyle.info}>
                    <Text style={langstyle.lang}>Skiils</Text>
                </View>
                <View>
                    <Text style={langstyle.text}>HTML</Text>
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
                    <Text style={langstyle.text}>CSS</Text>
                    <ProgressBar progress={0.8}
                                borderWidth={1}
                                fillColor="gold"
                                unfilledColor="#1A252f"
                                height={10}
                                borderColor="gold"
                                duration={100} />
                </View> 
                <br/>
                <View>
                    <Text style={langstyle.text}>Javascript</Text>
                    <ProgressBar progress={0.75}
                                borderWidth={1}
                                fillColor="gold"
                                unfilledColor="#1A252f"
                                height={10}
                                borderColor="gold"
                                duration={100} />
                </View>   
                <br/>
                <View>
                    <Text style={langstyle.text}>React</Text>
                    <ProgressBar progress={0.6}
                                borderWidth={1}
                                fillColor="gold"
                                unfilledColor="#1A252f"
                                height={10}
                                borderColor="gold"
                                duration={100} />
                </View>  
                <br/> 
                <View>
                    <Text style={langstyle.text}>Angular</Text>
                    <ProgressBar progress={0.73}
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