
import React, { useState } from "react";
import {View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Snackbar from "react-native-snackbar";
import { updatePrice } from '../src/services/price_services';
import tw from "tailwind-react-native-classnames";

export default Orders = ({navigation}) =>{
    const [foodCost, setFoodCost] = useState('');
    const [fuelCost, setFuelCost] = useState('');
    const [vehicleMaintenanceCost, setVehicleMaintenanceCost] = useState('');

    const handleUpdatePrice = () => {
        updatePrice(foodCost, fuelCost, vehicleMaintenanceCost)
            .then(response => {
                Snackbar.show({
                    text: 'Expense Updated',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                      text: 'Close',
                      textColor: 'green',
                    },
                });
            })
            .catch(error => {
                console.log(error);
                Snackbar.show({
                    text: 'Error updating price',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                      text: 'Error',
                      textColor: 'red',
                    },
                });
            });
    };

    return(
        <View style={tw`h-full bg-gray-400 pt-5`}>
            <TouchableOpacity style={tw`flex-initial `} onPress={() => navigation.openDrawer()} >
                <Image source={require('../screen/pictures/left.png')}></Image>
            </TouchableOpacity>
            <Text style={tw`text-center text-white text-xl font-extrabold underline uppercase mb-10`}>Trip Expense</Text>
            <TextInput
                    style={tw`rounded-full drop-shadow-none mx-10 mb-5 text-center bg-white`} 
                    placeholder=''
                    underlineColor="transparent"
                    label='Food Cost'
                    value={foodCost}
                    onChangeText={value => setFoodCost(value)}
            />
            <TextInput
                    style={tw`rounded-full drop-shadow-none mx-10 mb-5 text-center bg-white`} 
                    placeholder=''
                    underlineColor="transparent"
                    label='Fuel Cost'
                    value={fuelCost}
                    onChangeText={value => setFuelCost(value)}
            />
            <TextInput
                    style={tw`rounded-full drop-shadow-none mx-10 text-center bg-white`} 
                    placeholder=''
                    underlineColor="transparent"
                    label='Vehicle Maintenance Cost'
                    value={vehicleMaintenanceCost}
                    onChangeText={value => setVehicleMaintenanceCost(value)}
            />
            
            <Button style={tw`bg-pink-700 m-10 mt-20`}
          mode="contained" onPress={handleUpdatePrice}>Update Expense</Button>

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
})