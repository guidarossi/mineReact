import React from "react";
import { View, StyleSheet } from 'react-native';

export default props => {

    return(

        <View style={styles.container}>
            <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]}></View>
            <View style={[styles.flag, props.bigger ? styles.flagBigger : null]}></View>
            <View style={[styles.base1, props.bigger ? styles.base1Bigger : null]}></View>
            <View style={[styles.base2, props.bigger ? styles.base2Bigger : null]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

        marginTop: 3,
        marginLeft: 2,
    },
    flagpole:{

        position: 'absolute',
        height: 12,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 8,
    },
    flag:{

        position: 'absolute',
        height: 6,
        width: 7,
        backgroundColor: '#F22',
        marginLeft: 1.5,
        borderRadius: 1,
    
    },
    base1:{

        position: 'absolute',
        height: 2,
        width: 5,
        backgroundColor: '#222',
        marginLeft: 6,
        marginTop: 10,
    },
    base2:{

        position: 'absolute',
        height: 2,
        width: 7,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
    },
    flagBigger:{
        position: 'absolute',
        height: 20,
        width: 4,
        backgroundColor: '#222',
        marginLeft: 15,
    },
    
    flagpoleBigger:{
        
        height: 12,
        width: 12,
        backgroundColor: '#F22',
        marginLeft: 3,
        borderRadius: 1,
       
    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12,
    },
    base2Bigger:{
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24,
    },
})