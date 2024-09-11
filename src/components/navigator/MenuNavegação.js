import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Splash from "../../view/Splash"
import Dados from "../../view/Dados"
import Simulacao from "../../view/Simulacao"
import Resultado from "../../view/Resultado"

const Stack = createStackNavigator()

export default MenuNavigator = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Spash">
                
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Dados" component={Dados} />
                <Stack.Screen name="Simulacao" component={Simulacao} />
                <Stack.Screen name="Resultado" component={Resultado} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}