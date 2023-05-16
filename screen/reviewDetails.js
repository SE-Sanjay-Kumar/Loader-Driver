import React from "react";
import { useRoute } from '@react-navigation/native';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import MapScreen from "./maps"; 
import tw from "tailwind-react-native-classnames";
import { getClient, getOrders, updateOrderStatus } from '../src/services/driver_service';
import Snackbar from "react-native-snackbar";
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { requestLocationPermission } from '../src/services/location_service';



export default Orders = ({navigation}) =>{
    const [latitude, setLatitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);
    const route=useRoute();
    const { order } = route.params;
    React.useEffect(() => {
        handleViewPickUp();
    }, []);

    const handleViewPickUp = () => {
        let arr=order.pickUp.split(',');
        setLatitude(parseFloat(arr[0]));
        setLongitude(parseFloat(arr[1]));
        Snackbar.show({
          text: 'Showing Pick Up Location',
          duration: Snackbar.LENGTH_SHORT,
          action: {
            text: 'close',
            textColor: 'green',
            onPress: () => { /* Do something. */ },
          },
        });
      };
      getEstimatedTime=()=>{
        return hoursDifference;
      }
      const handleViewDropOff = () => {
          let arr=order.dropOff.split(',');
          setLatitude(parseFloat(arr[0]));
          setLongitude(parseFloat(arr[1]));
        Snackbar.show({
          text: 'Showing Drop Off Location',
          duration: Snackbar.LENGTH_SHORT,
          action: {
            text: 'close',
            textColor: 'green',
            onPress: () => { /* Do something. */ },
          },
        });
      };
    
    return(
        <View style={tw`bg-gray-400`}>
            <View style={tw`h-1/2`}>
            <MapView
                style={styles.map}
                region={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0412,
                }}
                onPress={(event) => updateLocation(event)}
            >
                <Marker
                coordinate={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                title={'Marker Title'}
                />
            </MapView>
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
                
                <Text style={tw`text-center text-lg font-semibold text-white mb-5 mt-5`}>Delivery Date:</Text>
                <TextInput style={tw`bg-white text-center mx-10 rounded-3xl`} underlineColor="transparent" disabled= 'true' >
                    {order.status.status!="active" ? (<Text style={tw`text-black `}>Pending</Text>):null}
                    {order.status.status=="active" ? (<Text style={tw`text-black `}>Order Delivered</Text>):null}
                    {order.status.status=="active" ? (<Text style={tw`text-black `}>{(order.estimatedArrivalOfGoods)}</Text>):null}
                </TextInput>
                {order.status.status=="active" ? (
                    <Button style={tw`bg-pink-700 mt-10 mx-20`} mode="contained" onPress={()=>{
                        updateOrderStatus(order);
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

                    ) : <Text style={tw`text-center text-lg font-bold text-white mb-5 mt-5`}>Order Status: {order.status.status}</Text>}
                <View>

                    <Button style={tw`bg-pink-700 mt-10 mx-20`} mode="contained" onPress={()=>{
                            handleViewPickUp();
                            Snackbar.show({
                                text: 'Showing Pick Up Location',
                                duration: Snackbar.LENGTH_SHORT,
                                action: {
                                text: 'close',
                                textColor: 'green',
                                onPress: () => { /* Do something. */ },
                                },
                            });
                        }}>
                            View Pick Up
                    </Button>
                    <Button style={tw`bg-pink-700 mt-10 mx-20`} mode="contained" onPress={()=>{
                            handleViewDropOff();
                            Snackbar.show({
                                text: 'Showing Drop Off Location',
                                duration: Snackbar.LENGTH_SHORT,
                                action: {
                                text: 'close',
                                textColor: 'green',
                                onPress: () => { /* Do something. */ },
                                },
                            });
                        }}>
                            View Drop Off
                    </Button>
                </View>

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
    map: {
        ...StyleSheet.absoluteFillObject,
      },
})