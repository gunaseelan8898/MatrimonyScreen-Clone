import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'

import Card from './Card'

const Scroll = (props) => {
    return (
        <ScrollView>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:25,marginVertical:20}}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:13}} >Your profile is pending verification!</Text>
            <TouchableOpacity style={{height:30,width:90,backgroundColor:'#eb9800',borderRadius:20,justifyContent:'center'}}>
                <Text style={{alignSelf:'center',color:'white'}} >Verify Now</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',height:70,width:320,borderColor:'#cccccc',borderWidth:1,borderRadius:10,marginHorizontal:20,marginVertical:20}}>
            <Image source={require('../assets/speakers.png')} resizeMode='contain' style={{height:30,width:30,marginHorizontal:10,alignSelf:'center'}} />
            <View style={{justifyContent:'center'}}>
            <Text style={{color:'black',fontSize:13}}>TamilMatrimony is part of</Text>
            <Text style={{color:'black',fontSize:13}} >BharatMatrimony, India's No.1</Text>
            <Text style={{color:'black',fontSize:13}} >Matrimony service</Text>
            </View>
            <TouchableOpacity style={{justifyContent:'center'}}>
            <Image source={require('../assets/arrow.png')} resizeMode='contain' style={{height:12,width:12,marginLeft:50,alignSelf:'center'}} />
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',height:140,width:320,backgroundColor:'#0f2638',borderRadius:10,marginHorizontal:20,marginVertical:15}}>
            <View style={{justifyContent:'center',marginBottom:50}}>
            <Text style={{color:'white',fontSize:15,marginLeft:100}}>As a free member,your profile</Text>
            <Text style={{color:'white',fontSize:15,marginLeft:110}} >is getting less views from</Text>
            <Text style={{color:'white',fontSize:15,marginLeft:140}} >potential matches</Text>
            </View>
            </View>
            <TouchableOpacity style={{position:'absolute',top:290,left:20,height:30,width:230,backgroundColor:'#eb9800',borderRadius:20,justifyContent:'center',marginLeft:75}}>
                <Text style={{alignSelf:'center',fontWeight:'bold',color:'white',}} >Upgrade to highlight your profile</Text>
            </TouchableOpacity>
            <Image source={require('../assets/user.jpg')} resizeMode='contain' style={{position:'absolute',top:220,left:30,height:60,width:60,borderRadius:40}} />
            <Card/>
        </ScrollView>
    )
}

export default Scroll

const styles = StyleSheet.create({})

