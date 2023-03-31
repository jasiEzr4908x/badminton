import React,{Component} from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'

class Singles extends React.Component{
    constructor(){
        super()
        
        }
    render(){
        return(
            <View style=
            {styles.headerview}>
                <Text style={styles.headertext}>Singles</Text>
                <Text styles={styles.headertext}>Name of Player 1</Text>
                <TextInput placeholder="Player A"/>
                <Text styles={styles.headertext}>Name of Player 2</Text>
                <TextInput placeholder="Player B"/>
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
export default Singles