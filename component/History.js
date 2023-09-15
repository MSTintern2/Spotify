import React from 'react';
import { View, Text,SafeAreaView, Dimensions } from 'react-native';
import style from '../styles/style';
import Econ from 'react-native-vector-icons/Entypo';
import "./global";
const { width } = Dimensions.get('window');


const History = () => {
    
 
    

    return (
        <SafeAreaView style={style.container_main}>

            <View style={{ justifyContent: 'center', flexDirection: "row", flex: 0.1 ,alignItems:'center'}} >

                <Text style={{ color: 'white', fontSize: 26, fontWeight: 700, position: 'absolute' }} >History</Text>
                <View style={{ left: width * 0.42, marginTop: 6 }}>
                    <Econ name={"dots-three-horizontal"} color={"white"} size={30} />
                </View>
            </View>


            <View style={{ flex: 0.9}}>
                <Text style={{ fontSize: 24, fontWeight: 600, color: "white", textAlign: "left", }}>Today</Text>

                    
                 
                  
                  
                </View>
        
        </SafeAreaView>
    )

}
export default History;
