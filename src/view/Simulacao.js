

import { StyleSheet,Touchable, TouchableOpacity, View,Text } from "react-native";

export default Simulacao = ({navigation}) => {

    const callResultado = () =>{
        navigation.navigate('Resultado')
    }
    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>SIMULACAO</Text>

            <TouchableOpacity onPress={callResultado} style={styles.btn}>
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