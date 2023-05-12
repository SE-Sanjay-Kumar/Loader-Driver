// import React from "react";
// import {View, StyleSheet, Image, ScrollView} from 'react-native'
// import { TextInput, Button, Text, Appbar } from 'react-native-paper';
// import { NavigationContainer } from '@react-navigation/native';
// import Snackbar from "react-native-snackbar";

// export default Orders = ({navigation}) =>{

//     return(
//         <View>
//             <TextInput
//                     style={styles.container} 
//                     placeholder=''
//                     label='Food Cost'
//             />
//             <TextInput
//                     style={styles.container} 
//                     placeholder=''
//                     label='Fuel Cost'
//             />
//             <TextInput
//                     style={styles.container} 
//                     placeholder=''
//                     label='Vehicle Maintenance Cost'
//             />
            
//             <Button style={styles.container} mode="contained" onPress={()=>{
//                 Snackbar.show({
//                     text: 'Price Updated',
//                     duration: Snackbar.LENGTH_SHORT,
//                     action: {
//                       text: 'Price Updated',
//                       textColor: 'green',
                      
//                     },
//                   });
//             }}>Update Price</Button>

//         </View>
//     )
// }

// const styles=StyleSheet.create({
//     container : {
//         margin: 20
//     },
//     heading: {
//         margin: 20,
//         fontSize: 20,
//         fontWeight: 'bold'
//     },
    
// })







import React, { useState } from "react";
import {View, StyleSheet, Image, ScrollView} from 'react-native'
import { TextInput, Button, Text, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Snackbar from "react-native-snackbar";
import { updatePrice } from '../src/services/price_services';

export default Orders = ({navigation}) =>{
    const [foodCost, setFoodCost] = useState('');
    const [fuelCost, setFuelCost] = useState('');
    const [vehicleMaintenanceCost, setVehicleMaintenanceCost] = useState('');

    const handleUpdatePrice = () => {
        updatePrice(foodCost, fuelCost, vehicleMaintenanceCost)
            .then(response => {
                Snackbar.show({
                    text: 'Price Updated',
                    duration: Snackbar.LENGTH_SHORT,
                    action: {
                      text: 'Price Updated',
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
        <View>
            <TextInput
                    style={styles.container} 
                    placeholder=''
                    label='Food Cost'
                    value={foodCost}
                    onChangeText={value => setFoodCost(value)}
            />
            <TextInput
                    style={styles.container} 
                    placeholder=''
                    label='Fuel Cost'
                    value={fuelCost}
                    onChangeText={value => setFuelCost(value)}
            />
            <TextInput
                    style={styles.container} 
                    placeholder=''
                    label='Vehicle Maintenance Cost'
                    value={vehicleMaintenanceCost}
                    onChangeText={value => setVehicleMaintenanceCost(value)}
            />
            
            <Button style={styles.container} mode="contained" onPress={handleUpdatePrice}>Update Price</Button>

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