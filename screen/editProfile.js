import * as React from 'react';
import { Appbar,Text } from 'react-native-paper';
import { useTheme,Avatar,Button,TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const EditProfile = () => {
    const [text, setText] = React.useState("");
    return (
     <View>
        <Text style={{margin: 30,fontSize: 30}}>
                Edit Profile
            </Text>
            <Avatar.Image size={100} style={Styles.imag} source={require('../assets/dummy-image.jpg')} />
            <Text style={{marginLeft: 30,marginTop: 10,fontSize: 20}}>
                Name: <TextInput style={Styles.txt}
                label="Name"
                value={text}
                onChangeText={text => setText(text)}
                />
            </Text>
            <Text style={{marginLeft: 30,marginTop: 3,fontSize: 20}}>
                Vehicle Allotted: TKT-821
            </Text>
            <Text style={{marginLeft: 30,marginTop: 3,fontSize: 20}}>
                Joined: 11-Dec-2018
            </Text>
            <Text style={{marginLeft: 30,marginTop: 3,fontSize: 20}}>
                Experience: 10 Year
            </Text>
            <Button style={Styles.btn} mode="contained" onPress={() => navigation.navigate('View Orders')}>
                Save
            </Button>
     </View>   
    )
};

const Styles=StyleSheet.create({
    imag:{
        marginLeft: 180,
        marginBottom: 40, 
    },
    btn:{
        width:300,
        marginLeft: 90,
        marginTop: 40,
    },
    txt:{
        width: 200,
        paddingBottom:8,
        height: 10,
    },
})

export default EditProfile;