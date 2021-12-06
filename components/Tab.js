import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions } from 'react-native'

const Icons = [
    {
        icon: require('../assets/home.png'),
        name:'Home'
    },
    {
        icon: require('../assets/match.png'),
        name:'Matches'
    },
    {
        icon: require('../assets/chat.png'),
        name:'Mailbox'
    },
    {
        icon: require('../assets/notification.png'),
        name:'Notifications'
    },
    {
        icon: require('../assets/search.png'),
        name:'Search'
    },
]

const Tab = () => {
    return (
        <View style={{height:55,width:'100%',backgroundColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            {Icons.map((item,index) => 
               <TouchableOpacity key={index} style={{alignItems:'center',marginHorizontal:Dimensions.get('window').width < 500 ? 10 : 15 ,marginTop:5}}  > 
                   <Image source={item.icon} style={{height:20,width:25}} resizeMode='contain' />
                <Text style={{color:'black',fontSize:12}} >
                {item.name}
                </Text> 
                </TouchableOpacity>
                )}
        </View>
    )
}

export default Tab

const styles = StyleSheet.create({})
