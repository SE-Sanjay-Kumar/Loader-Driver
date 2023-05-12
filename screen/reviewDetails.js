import React from "react";
import { useRoute } from '@react-navigation/native';
import {View, StyleSheet, Image} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import MapScreen from "./maps"; 

export default Orders = ({navigation}) =>{
    
    const route=useRoute();
    const { order } = route.params;
    return(
        <View>
            <TextInput
                    style={styles.container} 
                    placeholder=''
                    label={order.orderId}
            />
            <MapScreen />
            <Text style={styles.heading}>Delivery time Remaining:</Text>
            <TextInput style={styles.container} >23:35:18</TextInput>
            {order.status.status=="active" ? (
                <Button style={styles.btn} mode="contained" onPress={()=> navigation.navigate('Confirm Order',{
                    order:  order ,
                }) }>
                    Confrim Delivery
                </Button>

            ) : <Text style={styles.heading}>Order Confirmation Pending</Text>}

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