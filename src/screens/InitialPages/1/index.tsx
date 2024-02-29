import { ImageBackground, View , Text} from 'react-native'
import { styles } from '../../../styles/InitialPages'

export function InitialPage1() {

    return (


        <View>
                <Text style={styles.title}>Edite seus documentos com facilidade</Text>
                <Text style={styles.paragrafo}>Bem-vindo ao Easy Doc, o seu assistente de documentação pessoal. Aqui, oferecemos mais de 10 modelos de documentos prontos para uso. Com a nossa interface intuitiva, você pode editar seus documentos com facilidade, economizando tempo e esforço.</Text>

        </View>
    )
}