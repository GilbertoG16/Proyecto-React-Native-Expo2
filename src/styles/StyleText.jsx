import React from 'react'
import {Text,StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    text :{
        fontSize:12,
        color: 'grey'
    },
    bold :{
        fontWeight:'bold'
    },
    big:{
        fontSize:20
    },
    small:{
        fontSize:20
    },
})

export default function StyleText({bold,children,big,small}){
    const textStyles = [
        styles.text,
        big && styles.big,
        small && styles.small,
        bold && styles.bold
    ]
    return(
        <Text style={textStyles}>
            {children}
        </Text>
    )
}