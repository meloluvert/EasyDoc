import { ImageBackground, View , Text} from 'react-native'
import { stylesInitial } from '../../../styles/InitialPages'
import { styles } from '../../../styles/GlobalStyle'

export function InitialPage1() {

    return (


        <View>
                <Text style={stylesInitial.title}>Edite seus documentos com facilidade</Text>
                <Text style={stylesInitial.paragrafo}>Bem-vindo ao <Text style={styles.bold}> Easy Doc</Text>, o seu assistente de documentação pessoal. Aqui, oferecemos mais de <Text style={styles.bold}> 10 modelos de currículos</Text> prontos para uso. Com a nossa interface intuitiva, você pode editar seus documentos com facilidade, economizando tempo e esforço.</Text>

        </View>
    )
}