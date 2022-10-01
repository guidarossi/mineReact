import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal 
} from "react-native";


export default props => {

    return (

        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <TouchableOpacity
                        style={[styles.button, styles.bgEasy]}
                        onPress={() => props.onLevelSelected(0.1)}
                    >
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.bgNormal]}
                        onPress={() => props.onLevelSelected(0.2)}
                    >
                        <Text style={styles.buttonLabel}>Normal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.bgHard]}
                        onPress={() => props.onLevelSelected(0.3)}
                    >
                        <Text style={styles.buttonLabel}>Difícil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    frame:{

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container:{

        borderRadius: 5,
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title:{

        fontSize: 30,
        fontWeight: 'bold',
        elevation: 5,
    },
    button:{

        marginTop: 10,
        padding: 5,
    },
    bgEasy:{

        alignItems: 'center',
        width: 100,
        borderRadius: 5,
        backgroundColor: '#49B65D',
        elevation: 5,
    },
    bgNormal:{

        alignItems: 'center',
        width: 100,
        borderRadius: 5,
        backgroundColor: '#2765F7',
        elevation: 5,
    },
    bgHard:{

        alignItems: 'center',
        width: 100,
        borderRadius: 5,
        backgroundColor: '#F26337',
        elevation: 5,
    },
    buttonLabel:{

        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    }

})