import React from "react";
import { useRoute } from '@react-navigation/native';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import MapScreen from "./maps"; 
import tw from "tailwind-react-native-classnames";
import { getClient, getOrders } from '../src/services/driver_service';
import Snackbar from "react-native-snackbar";


export default Orders = ({navigation}) =>{
    
    const route=useRoute();
    const { order } = route.params;
    return(
        <View style={tw`bg-gray-400`}>
            <View style={tw`h-1/2`}>
                <MapScreen />
            </View>

            <View style={tw`h-1/2`}>
                <TouchableOpacity style={tw`flex-initial `} onPress={() => navigation.openDrawer()} >
                    <Image source={require('../screen/pictures/left.png')} ></Image>
                </TouchableOpacity>
                <Text style = {tw`text-center text-white font-semibold text-lg underline`}>Order ID: {order.orderId}</Text>
                <Text style = {tw`text-center text-white font-semibold text-lg mt-2 uppercase`}>Customer Name: {order.client.userName}</Text>
                
                {/* <TextInput
                        style={styles.container} 
                        placeholder=''
                        label={order.orderId}
                /> */}
                
                <Text style={tw`text-center text-lg font-semibold text-white mb-5 mt-5`}>Delivery time Remaining:</Text>
                <TextInput style={tw`bg-white text-center mx-10 rounded-3xl`} underlineColor="transparent" disabled= 'true' >
                    <Text style={tw`text-black `}>23:35:18</Text>
                </TextInput>
                {order.status.status=="active" ? (
                    <Button style={tw`bg-pink-700 mt-10 mx-20`} mode="contained" onPress={()=>{
                        Snackbar.show({
                            text: 'Delivery Complete',
                            duration: Snackbar.LENGTH_SHORT,
                            action: {
                              text: 'close',
                              textColor: 'green',
                              onPress: () => { /* Do something. */ },
                            },
                          });
                    }}>
                        Confrim Delivery
                    </Button>

                    ) : <Text style={tw`text-center text-lg font-bold text-white mb-5 mt-5`}>Order Confirmation: {order.status.status}</Text>}
            </View>
            

        </View>
    )
}

const styles=StyleSheet.create({
    container : {
        margin: 20
    },
    heading: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    btn:{
        width:300,
        marginLeft: 90,
        marginTop: 40,
    },
})