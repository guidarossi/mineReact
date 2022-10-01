import React from "react";
import { View, StyleSheet} from 'react-native'

export default porps => {

    return(

        <View style={styles.container}>
            <View style={styles.coreMine}></View>
            <View style={[styles.line ]}></View>
            <View style={[styles.line, { transform: [{rotate: '45deg'}]}]}></View>
            <View style={[styles.line, { transform: [{rotate: '90deg'}]}]}></View>
            <View style={[styles.line, { transform: [{rotate: '135deg'}]}]}></View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{

        alignItems: 'center',
        justifyContent: 'center',
    },
    coreMine:{

        height: 6,
        width: 6,
        borderRadius: 10,
        borderStartColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line:{

        position: 'absolute',
        height: 3.5,
        width: 18,
        borderRadius: 5,
        backgroundColor: 'black',
    }
})