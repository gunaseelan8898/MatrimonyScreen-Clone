import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity,Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import Scroll from '../components/Scroll';
import Tab from '../components/Tab';

const Home = (props) => {
    return (
        <LinearGradient
            colors={['#00d49c', '#17abb3']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}>
            <StatusBar backgroundColor='transparent' translucent={true} />
            <LinearGradient
                colors={['#00d49c', '#17abb3']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 ,flexDirection:'row' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.prime}>
                        <Text style={{ alignSelf: 'center', color: '#8400ff', fontWeight: 'bold', fontSize: 17, paddingLeft: 5 }}>PRIME</Text>
                    </View>
                    <View style={styles.regular}>
                        <Text style={{ alignSelf: 'center', color: 'white' }}>Regular</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ marginTop: 80, marginLeft:30,}}>
                    <Image source={require('../assets/user.png')} resizeMode='contain' style={{ height: 50, width: 50, borderRadius: 100 }} />
                </TouchableOpacity>
                <View style={{ position: 'absolute', top:85, left: 90 }}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Good Evening!</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Gunaseelan</Text>
                </View>
                <View  style={{flexDirection:'row', marginTop:98,marginLeft:Dimensions.get('window').width < 500 ? 160 : 190,}}>
                <TouchableOpacity>
                    <Image source={require('../assets/message.png')} resizeMode='contain' style={{height: 30, width: 20, }} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:15}}>
                    <Image source={require('../assets/bars.png')} resizeMode='contain' style={{height: 30, width: 25, }} />
                </TouchableOpacity>
                </View>
            </LinearGradient>
            <View style={{ flex:Dimensions.get('window').height < 850 ? 2.5 : 4, backgroundColor: '#f7f7f7', borderTopLeftRadius: 25, borderTopRightRadius: 25, }}>
                <Scroll />
            </View>
            <Tab/>  
        </LinearGradient>
    )
}

export default Home

const styles = StyleSheet.create({
    regular: {
        position: 'absolute',
        top:Dimensions.get('window').height < 850 ? 30 : 40,
        left:Dimensions.get('window').width < 500 ? 80 : 100,
        height: 35,
        width: 80,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 0.8,
        backgroundColor: '#15848a',
        justifyContent: 'center'
    },
    prime: {
        position: 'absolute',
        top: Dimensions.get('window').height < 850 ? 33 : 40,
        left:Dimensions.get('window').width < 500 ? 140 : 160,
        height: 30,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center'
    }
})
