
import * as React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DataTable,Button } from 'react-native-paper';
import { getClient, getOrders } from '../src/services/driver_service';
import tw from 'tailwind-react-native-classnames';

const ViewOrder = ({navigation}) => {
  const [orders, setOrders] = React.useState([]);
  const route=useRoute();
  const [driverId, setDriverId] = React.useState(route.params.id);
  //you need to configure driver in such a way that the orders should be displayed only of relevant drivers
  React.useEffect(() => {
    allorders();
  }, [driverId]);
  
  const allorders = () => {
    //update order status here as the driver has 
    getOrders().then((response) => {
      setOrders(response.data);
      // console.log(driverId);
      
    }).catch((err) => {
      if(err.response){

        setError(err.response.data.msg)
      }
      else if (err.request){
        console.log(err.request);
      }
      else
        console.log(err.message);
    });
  };

  return (
    <ScrollView style={[tw`h-full bg-gray-400 pt-5`,{ }]}>
      <TouchableOpacity style={tw`flex-initial `} onPress={() => navigation.openDrawer()} >
                <Image source={require('../screen/pictures/left.png')}></Image>
            </TouchableOpacity>
      <Text style = {[tw`text-center text-2xl font-extrabold text-white underline m-3 mt-0`,{ }]}>Orders</Text>
      <DataTable style={tw`px-2`} >
        <DataTable.Header style = {[tw` bg-gray-700 `,{ }]}>
          <DataTable.Title style={tw``}><Text style={[tw`text-white   uppercase`,{}]}>Customer</Text></DataTable.Title>
          <DataTable.Title style={tw``} ><Text style={[tw`text-white text-center   uppercase`,{}]}>Order Status</Text></DataTable.Title>
          <DataTable.Title style={tw`pr-0 items-end`}><Text style={[tw`text-white text-center  font-semibold uppercase`,{}]}>Select Order</Text></DataTable.Title>
        </DataTable.Header>

        {orders.map((order, index) => (
          order.driver!=null?(order.driver.id==driverId ? (
            <DataTable.Row key={index}>
              <DataTable.Cell><Text style={[tw`text-white   uppercase`,{}]}>{order.client.userName}</Text></DataTable.Cell>
              <DataTable.Cell><Text style={[tw`text-white   uppercase`,{}]}>{order.status.status}</Text></DataTable.Cell>
              <DataTable.Cell style={tw`pr-0 `}><Button mode="contained" style={tw`bg-pink-700 `} onPress={() => navigation.navigate('Review Details',{
                order: order,
              })}>
               <Text style={[tw`text-white  uppercase`,{}]}>View</Text>
              </Button></DataTable.Cell>
            </DataTable.Row>) : null):null
          ))}
      </DataTable>
    </ScrollView>
    
  );
};

export default ViewOrder;