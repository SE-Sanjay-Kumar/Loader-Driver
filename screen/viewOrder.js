
import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import { DataTable,Button } from 'react-native-paper';
import { getClient, getOrders } from '../src/services/driver_service';
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
      console.log(driverId);
      
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
    <DataTable>
      <DataTable.Header>
        <DataTable.Title >Customer Name</DataTable.Title>
        <DataTable.Title style={{marginLeft:10,}} numeric>Order Status</DataTable.Title>
        <DataTable.Title style={{marginLeft:10,}} numeric>Order Id</DataTable.Title>
        <DataTable.Title style={{marginLeft:10,}} >Select Order</DataTable.Title>
      </DataTable.Header>

      {orders.map((order, index) => (
        order.driver.id==driverId ? (
        <DataTable.Row key={index}>
          <DataTable.Cell>{order.client.userName}</DataTable.Cell>
          <DataTable.Cell>{order.date}</DataTable.Cell>
          <DataTable.Cell>{order.status.status}</DataTable.Cell>
          <DataTable.Cell numeric style={{marginLeft:10,}}>{ order.id }</DataTable.Cell>
          <Button mode="outlined"style={{marginLeft:10,}} onPress={() => navigation.navigate('Review Details',{
            order: order,
          })}>
            View
          </Button>
        </DataTable.Row>) : null
      ))}
    </DataTable>
  );
};

export default ViewOrder;