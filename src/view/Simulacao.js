

import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, Checkbox, TextInput, Button } from "react-native-paper";


export default Simulacao = ({ route, navigation }) => {

    const { Dados } = route.params;
    //console.log(Dados);

    const [user, setUser] = useState({
        ...Dados,
        valorFinanciado: '',
        taxa: '',
        parcelas: '',
        desconto: '',
        ehServidorPublico: 'unchecked'
    })

    const [visivel , setVisivel] = useState(false)

    const callResultado = () => {
        navigation.navigate('Resultado' ,{Dados:user})
    }

    const validaServidor = () => {

        let aux = (user.ehServidorPublico == 'checked') ? 'unchecked' : 'checked'
        setUser({ ...user, ehServidorPublico: aux })
    }
    useEffect(()=>{
        setVisivel(user.ehServidorPublico == 'checked')
    }, [user.ehServidorPublico])

    


    return (
        <View style={styles.container}>

            <Card.Title
                title={"Olá Sr(a) " + Dados.nome}
                subtitle="Vamos simular"
                left={(props) => <Avatar.Icon{...props} icon="folder" />}
            />

            <TextInput
                style={styles.campo}
                mdoe="flat"
                label="valor financiamento"
                keyboardType="decimal-pad"
                value={user.valorFinanciado}
                onChangeText={t => setUser({ ...user, valorFinanciado : t})}
            />
            <TextInput
                style={styles.campo}
                mdoe="flat"
                label="taxa de juros"
                keyboardType="decimal-pad"
                value={user.taxa}
                onChangeText={t => setUser({ ...user, taxa : t })}
            />
            <TextInput
                style={styles.campo}
                mdoe="flat"
                label="numero de parcelas"
                keyboardType="numeric"
                value={user.parcelas}
                onChangeText={t => setUser({ ...user, parcelas : t})}
            />

            <Checkbox.Item
                style={styles.check}
                label="servidor publico"
                status={user.ehServidorPublico}
                onPress={validaServidor}
            />
            { visivel &&
                <TextInput
                    style={styles.campo}
                    mdoe="flat"
                    label="Desconto"
                    keyboardType="numeric"
                    value={user.desconto}
                    onChangeText={t => setUser({ ...user, desconto : t})}
                />
            }

            <Button
                style={styles.btn}
                icon="skip-next"
                size={60}
                mode="contained"
                onPress={callResultado}>
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
        marginTop: 10
    },
    check: {
        border: '1px solid black',
        borderRadius: 5,
        marginTop: '20px'
    },
    campo: {

        marginTop: "10px"

    }

})