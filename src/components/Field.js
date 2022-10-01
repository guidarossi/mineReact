import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import params from "../params";
import Mine from "./Mine";
import Flag from "./Flag";

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props

    const styleField = [styles.field]
    if(opened) styleField.push(styles.opened) //se aberto aplica outro estilo
    if(exploded) styleField.push(styles.exploded) //se explodio aplica outro estilo
    if(flagged) styleField.push(styles.flagged) //se marcado com bandeira aplica outro estilo
    if(!opened && !exploded) styleField.push(styles.regular) //se nao aberto e nao explodido aplica o estilo
   

    let color = null
    //define a cor do testo de acordo com a quantidade de minas ao redor
    if(nearMines > 0){

        if(nearMines == 1) color = '#2A28D7'
        if(nearMines == 2) color = '#2B520F'
        if(nearMines > 2 && nearMines < 6) color = '#F9060A'
        if(nearMines >= 6) color = '#F221A9'
    }
        
    return (

        <TouchableWithoutFeedback onPress={(props.onOpen)}
        onLongPress={props.onSelect}
        >
            <View style={styleField}>

                {flagged && !opened ? <Flag></Flag> : false
                //faz se tiver marcado com bandeira e não estiver aberto
                } 

                {!mined && opened && nearMines > 0 //faz se n tiver mina, estiver aberto e ter minas ao redor
                ?
                <Text style={[styles.label, { color: color}]}>
                    {nearMines}
                </Text> : false }


                {mined && opened ? <Mine></Mine> : false
                //faz se o campo estiver minado e aberto
                } 
            </View>
        </TouchableWithoutFeedback>
        
    )
    
}

const styles = StyleSheet.create({

    field:{
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular:{
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
        shadowColor: "#CCC",
        shadowOffset: {
	        width: 0,
	        height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,

        elevation: 20,
    },
    opened:{
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    label:{
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded:{
        backgroundColor: '#ff3300',
        borderColor: '#ff471a',
       
    },
    flagged:{

    }
})