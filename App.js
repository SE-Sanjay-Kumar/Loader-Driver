import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import About from './screen/about';
import Home from './screen/home';
import confirmOrder from './screen/confirmOrder';
import EditProfile from './screen/editProfile';
import ViewOrder from './screen/viewOrder';
import reviewDetails from './screen/reviewDetails';
import ExpenseReport from './screen/expenseReport';
import Login from './screen/Login'

const Drawer = createDrawerNavigator();

function App() {
  const [id, setId] = useState('6');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Drawer.Navigator screenOptions={{
              drawerStyle: { backgroundColor: '#c4b5fd' },
              drawerPosition: 'left',
              headerStyle: {backgroundColor: '#d9b3ff'},
              headerShown: false,
              fontWeight: 'bold'
              }} initialRouteName="login">
          <Drawer.Screen name="login" component={Login} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Edit Profile" component={EditProfile} />
            <Drawer.Screen
              name="View Orders"
              component={ViewOrder}
              initialParams={{ id: id }}
            />
            <Drawer.Screen
              name="Expense Update"
              component={ExpenseReport}
            />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen
              name="Confirm Order"
              component={confirmOrder}
              options={{ drawerLabel: () => null, title: null, drawerIcon: () => null }}
            />
            <Drawer.Screen
              name="Review Details"
              component={reviewDetails}
              options={{ drawerLabel: () => null, title: null, drawerIcon: () => null }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  abc: {
    backgroundColor: 'red',
  },
});

export default App;
