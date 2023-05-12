import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { getDriver } from '../src/services/driver_service';
import { Route } from 'react-router-dom';

export default function Home({ navigation }) {
  const [driver, setDriver] = React.useState([]);
  const [id, setDriverId] = React.useState('6');
  
  React.useEffect(() => {
    getdriver();
  }, []);

  const getdriver = () => {
    getDriver(id)
      .then((response) => {
        //console.log(response.data);
        setDriver(response.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log("Error");
          setError(err.response.data.msg);
        } else if (err.request) {
            console.log("Error");
            console.log(err.request);
        } else {
            console.log("Error");
          console.log(err.message);
        }
      });
  };

  return (
    <View>
      <Text style={{ margin: 30, fontSize: 30 }}>Home Screen</Text>
      <Avatar.Image
        size={100}
        style={Styles.imag}
        source={require('../assets/dummy-image.jpg')}
      />
      <Text style={{ marginLeft: 30, marginTop: 10, fontSize: 20 }}>
        Name: {driver.userName}
      </Text>
      <Text style={{ marginLeft: 30, marginTop: 3, fontSize: 20 }}>
        Vehicle Allotted: {driver.vehicle!=null ? (driver.vehicle.plateNo):'No Vehicle Alloted'}
      </Text>
      <Text style={{ marginLeft: 30, marginTop: 3, fontSize: 20 }}>
        Vehicle Type: {driver.vehicle!=null ? (driver.vehicle.name):'No Vehicle Alloted to driver'}
      </Text>
      <Text style={{ marginLeft: 30, marginTop: 3, fontSize: 20 }}>
        License: {driver.licenseNumber}
      </Text>
      <Text style={{ marginLeft: 30, marginTop: 3, fontSize: 20 }}>
        Experience: {driver.yearsOfExperience}
      </Text>
      <Button
        icon="camera"
        style={Styles.btn}
        mode="contained"
        onPress={() => navigation.navigate('View Orders',{
          id: driver.id,
        })}>
        Press me To view Orders
      </Button>
    </View>
  );
}

const Styles = StyleSheet.create({
  imag: {
    marginLeft: 180,
    marginBottom: 40,
  },
  btn: {
    width: 300,
    marginLeft: 90,
    marginTop: 40,
  },
});