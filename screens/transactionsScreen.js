import * as React from "react";
import {View, Text, StyleSheet} from "react-native"
export default class TransactionScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}> 
                <Text>Issue or Return </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent:"center",
        alignItems:"center"
        
    }
})