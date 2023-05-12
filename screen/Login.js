import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { getDriver } from '../src/services/driver_service';
import { Route } from 'react-router-dom';

export default function Home({ navigation }) {
  const [userName, setuserName] = React.useState("");

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
      <Text style={{ margin: 30, fontSize: 30 }}>Login Screen</Text>
      <Text style={{marginLeft: 30,marginTop: 10,fontSize: 20}}>
                User Name: <TextInput style={Styles.txt}
                label="Name"
                value={userName}
                onChangeText={text => setuserName(text)}
                />
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