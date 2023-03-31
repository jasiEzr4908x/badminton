import React,{Component} from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import Header from "./Header"
class Mainscreen extends React.Component{

    render(){
        return(
            <View style=
            {styles.headerview}>
                <Header/>
<Button title="Singles"
onPress={()=>this.props.navigation.navigate("Singles")}
/>
 <Button title="Doubles"
 onPress={()=>this.props.navigation.navigate("Doubles")}
 />              
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
export default Mainscreen