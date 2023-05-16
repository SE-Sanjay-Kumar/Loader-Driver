import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { getDriver } from '../src/services/driver_service';
import { Route } from 'react-router-dom';
import tw from 'tailwind-react-native-classnames';
import { Formik } from 'formik';
import * as yup from 'yup'
import HideKeyboard from '../components/HideKeyboard';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';


export default function Home({ navigation }) {
  const [userName, setuserName] = React.useState("");

  const gotoHome =()=>{
    navigation.navigate('Home')
  }
  return (
    <HideKeyboard>
      <View style={[tw``,{backgroundColor: '#FFFFFF'}]}>
        <View style={tw`h-1/2`}>
          <Image source={require('../screen/pictures/logo.jpg')} 
              style={[tw``,{resizeMode: "cover", width: responsiveWidth(100)}]}></Image>
        </View>
        <View style={[tw`h-1/2 rounded-t-3xl`,{backgroundColor: '#828282'}]}>
            <Formik
                style={tw`text-white`}
                validationSchema={loginValidationSchema}
                initialValues={{ username: '', password: '' }}
                onSubmit={(values, actions) => {
                  if (values.username === 'tms' && values.password === "loaderpass") {
                    actions.resetForm();
                    Snackbar.show({
                      text: 'Logged in sucesfully',
                      duration: Snackbar.LENGTH_SHORT,
                      action: {
                        text: 'close',
                        textColor: 'green',
                        onPress: () => { /* Do something. */ },
                      },
                    });
                  } else {
                    Snackbar.show({
                      text: 'Invalid username or password',
                      duration: Snackbar.LENGTH_SHORT,
                      action: {
                        text: 'close',
                        textColor: '#7676a7',
                        onPress: () => { /* Do something. */ },
                      },
                    });
                  }
                }}>
                {
                  (
                    {
                      handleChange,
                      handleSubmit,
                      values,
                      errors,
                      isValid
                    }
                  ) => (
                    <View>
                      <TextInput
                        placeholder='Username'
                        placeholderTextColor={'black'}
                        onChangeText={handleChange('username')}
                        value={values.username}
                        underlineColor='transparent'
                        outlineColor= 'white'
                        style={[tw`m-5 rounded-2xl rounded-t-2xl text-center bg-white`,{}]}
                      />
                      {errors.username &&
                        <Text style={Styles.error}>{errors.username}</Text>
                      }
                      <TextInput
                        placeholder='Password'
                        placeholderTextColor={'black'}
                        secureTextEntry={true}
                        underlineColor='white'
                        onChangeText={handleChange('password')}
                        value={values.password}
                        style={tw`mx-5 rounded-2xl rounded-t-2xl text-center bg-white `}
                      />
                      {errors.password &&
                        <Text style={Styles.error}>{errors.password}</Text>
                      }
                      <View >
                        <Button  style={[tw`mt-10 mx-10 text-black bg-pink-700`,{}]} mode='contained'
                          onPress={gotoHome}
                          disabled={!isValid}
                        ><Text style={tw`font-bold`}>Log In</Text></Button>
                        
                      
                      </View>
                    </View>
                  )
                }
            </Formik>
      </View>
      
    </View>
    </HideKeyboard>
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

const loginValidationSchema = yup.object().shape({
  username: yup.string().required('User name is Required'),
  password: yup.string().min(6, ({ min }) => 'Password must be at least ${min} characters').required('Password is required')

})
