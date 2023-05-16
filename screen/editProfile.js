import * as React from 'react';
import { Appbar,Text } from 'react-native-paper';
import { useTheme,Avatar,Button,TextInput } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const EditProfile = ({navigation}) => {
    const [text, setText] = React.useState("");
    return (
     <View style={tw`h-full bg-gray-400 pt-5`}>
            <TouchableOpacity style={tw`flex-initial `} onPress={() => navigation.openDrawer()} >
                <Image source={require('../screen/pictures/left.png')}></Image>
            </TouchableOpacity>
            <Text style={tw`text-center text-white text-xl font-extrabold underline uppercase mb-10`}>Edit Profile</Text>
            {/* <Avatar.Image size={100} style={Styles.imag} source={require('../assets/dummy-image.jpg')} /> */}


            <View style={[tw`flex-row items-center mb-2`,{ }]}>
                <Text style={tw`font-bold underline text-lg ml-10`}>Name:</Text>
                <TextInput 
                style={[tw`rounded-2xl rounded-t-2xl ml-2 text-center text-white bg-white px-10 `,{}]}
                underlineColor='transparent'
                placeholder='Username'
                placeholderTextColor={'black'}
                label=""
                value={text}
                onChangeText={text => setText(text)}
                />
            </View>

            <View style={[tw`flex-row items-center mb-2`,{ }]}>
                <Text style={tw`font-bold underline text-lg ml-10`}>Vehicle Allotted:</Text>
                <Text style={tw`text-base uppercase ml-2`}>TKT-821</Text>
            </View>

            <View style={[tw`flex-row items-center mb-2`,{ }]}>
                <Text style={tw`font-bold underline text-lg ml-10`}>Joined:</Text>
                <Text style={tw`text-base uppercase ml-2`}>11-Dec-2018</Text>
            </View>

            <View style={[tw`flex-row items-center mb-2`,{ }]}>
                <Text style={tw`font-bold underline text-lg ml-10`}>Experience:</Text>
                <Text style={tw`text-base uppercase ml-2`}>10 Year</Text>
            </View>

            
            <Button style={tw`bg-pink-700 m-10 mt-20`}
            mode="contained" onPress={() => navigation.navigate('Home')}>
                Update
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