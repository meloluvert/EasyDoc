import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {Login} from "./../screens/Login"
import {Register} from "./../screens/Register"

type LoginStackList = {
    Login: undefined
    Register: undefined
}

type LoginScreenNavigatorProp = StackNavigationProp<LoginStackParamList, 'Login'>

//AQUIII