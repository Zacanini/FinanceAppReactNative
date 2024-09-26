

import { StyleSheet, View,Text } from "react-native";
import { Icon, MD3Colors } from "react-native-paper";
import valorParcela from "../service/FinanciamentoService";

export default Resultado = ({route}) => {

    const { Dados } = route.params;

    return(
        <View style={styles.container}>

            <Text style={styles.titulo}>RESULTADO FINANCIAMENTO</Text>
            <Icon
                source="alarm-panel"
                color={MD3Colors.error50}
                size={58}
                
            />

            <Text>
                Olá sr {Dados.nome}
            </Text>
            <Text>
                O emprestimo é de R$ {Dados.valorFinanciado}
            </Text>
            <Text>
                A prestação será de {Dados.parcelas} de R$ {valorParcela(Dados)}
            </Text>

           {/* <TouchableOpacity style={styles.btn}>
                <Text >Próximo</Text>
            </TouchableOpacity>*/}
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