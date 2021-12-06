import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image,TouchableOpacity ,Dimensions} from 'react-native'

 import USER from '../data/dummy'


const Card = (props) => {
    return (
        <View>
            <View style={{ height: 200, width: '100%', backgroundColor: '#e1e5f0', marginTop: 20 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center', color: 'black', marginVertical:13 }}>Your Daily Recommendation's for 1 Dec</Text>
             
            <ScrollView horizontal={true} style={{marginHorizontal:Dimensions.get('window').width < 500 ? 5 :10}}>
                {USER.map((User) =>
                    <View key={User.id} style={{ height: 100, width:Dimensions.get('window').width < 500 ?55:60, alignItems: 'center', justifyContent: 'center',marginHorizontal:5 }}>
                        <Image source={User.imageUrl} style={{ height:Dimensions.get('window').height < 850 ? 40:50, width:Dimensions.get('window').width < 500 ?40:50, borderRadius: 70 }} />
                        <Text style={{ fontSize:Dimensions.get('window').width < 500 ?10:12, color: 'black'}} >
                            {User.name}
                        </Text>
                    </View>
                )}
                <TouchableOpacity style={{height:Dimensions.get('window').height < 850 ?45:50,width:Dimensions.get('window').width < 500 ?45:50,backgroundColor:'#eb9800',borderRadius:70,marginTop:Dimensions.get('window').height < 850 ?23:20,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../assets/arrowwhite.png')} resizeMode='contain' style={{height:15,width:15,marginLeft:5,alignSelf:'center'}} />
                </TouchableOpacity>
            </ScrollView>
            <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize:13,marginLeft:20, color: 'black',marginBottom:20 }}>Time left to view these profiles -</Text>
            <Text style={{ fontSize:13,marginLeft:2,fontWeight:'bold', color: 'black',marginBottom:20 }}>04 : 08 : 50</Text>
            </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({})
