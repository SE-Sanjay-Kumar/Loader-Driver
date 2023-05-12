import React from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import { confirmDelivery } from '../src/services/driver_service';


export default function Home({ navigation }) {
    
    const route=useRoute();
    const { order }= route.params;
    React.useEffect(() => {
        confirmorder();
      }, []);
    const confirmorder = () => {
        //update order status here as the driver has 
        
        confirmDelivery(order.orderId).then(() => {
          
        }).catch((err) => {
          if(err.response){
            // console.log(err.response);
            setError(err.response.data.msg)
          }
          else if (err.request){
            console.log(err.request);
          }
          else
            console.log(err.message);
        });
    }

    return (
        <View>
            <Text style={{margin: 30,fontSize: 30}}>
                Order Delivered Successfully
            </Text>
        </View>
    )
}

const Styles=StyleSheet.create({
    imag:{
        marginLeft: 180,
        marginBottom: 40, 
    },
    btn:{
        width:300,
        marginLeft: 90,
        marginTop: 40,
    }
})