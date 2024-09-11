

import { StyleSheet,Touchable, TouchableOpacity, View,Text } from "react-native";

export default Splash = ({navigation}) => {

    const callDados = () =>{
        navigation.navigate('Dados')
    }

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>SPLASH</Text>

            <TouchableOpacity onPress={callDados} style={styles.btn}>
                <Text >Próximo</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titulo:{
        fontSize:28,
        padding:15,
        fontWeight:'bold',
    },
    btn:{
        padding:15,
        backgroundColor:'#bb0',
        borderRadius:10,
    }

})