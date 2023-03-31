import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

class Header extends React.Component{
    render(){
        return(
            <View style=
            {styles.headerview}>
                <Text style={styles.headertext}>Shuttle Scorer</Text>
            </View>
        )   
    }
}
const styles=StyleSheet.create({
    headerview:{
        backgroundColor:"#F8CBA6"
    },
    headertext:{
        textAlign:'center',
        color:"white",
        fontWeight:"bold",
        fontSize:25,
        padding:10
    }
})
export default Header