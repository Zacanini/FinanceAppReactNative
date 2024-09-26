

import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, TextInput } from "react-native-paper";

export default Dados = ({ navigation }) => {

    const [user, setUser] = useState({
        nome:'',
        idade:'',
        rendaFamiliar:'',
        filhos:''
    });

    const callSimulacao = () => {
        navigation.navigate('Simulacao',{Dados:user})
    }
    return (
        <View style={styles.container}>

            <Avatar.Icon 
            size={50} 
            icon="account-supervisor-outline" 
            color="yellow"
            style={{marginTop:20}}
            
            />

            <View>
                <TextInput
                    style={styles.campo} 
                    mode="flat"
                    label="nome"
                    value={user.nome}
                    onChangeText={t => setUser({...user , nome: t})}
                />
                <TextInput
                    style={styles.campo} 
                    mode="flat"
                    label="idade"
                    keyboardType="number-pad"
                    value={user.idade}
                    onChangeText={t => setUser({...user , idade: t})}
                />
                <TextInput
                    style={styles.campo} 
                    mode="flat"
                    label="Renda familiar"
                    keyboardType="number-pad"
                    value={user.rendaFamiliar}
                    onChangeText={t => setUser({...user , rendaFamiliar: t})}
                />
                <TextInput
                    style={styles.campo} 
                    mode="flat"
                    label="Numero de Filhos"
                    keyboardType="number-pad"
                    value={user.filhos}
                    onChangeText={t => setUser({...user , filhos: t})}
                />
            </View>

            {/*<Text style={styles.titulo}>DADOS</Text>*/}

            <Button 
                style={styles.btn}
                icon="skip-next"
                size={60}
                mode="contained"
                onPress={callSimulacao}>
                    Próximo
                </Button>
            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titulo: {
        fontSize: 28,
        padding: 15,
        fontWeight: 'bold',
    },
    btn: {
        padding: 5,
        borderRadius: 5,
        marginTop:10
    },
    campo: {
        
        marginTop:"10px"

    }

})