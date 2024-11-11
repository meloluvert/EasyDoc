import { View, Text, Image,StyleSheet } from 'react-native'
import { stylesInitial } from '../../../styles/InitialPages'
import { styles  } from '../../../styles/GlobalStyle'
import {styles2} from './styles'
export function InitialPage2() {
    const wordImg = require('../../../assets/Initial/word.png')
    const pdfImg = require('../../../assets/Initial/pdf.png')
    return (
        <View>
            <Text style={[stylesInitial.title, SpecificStyle.right]}>Compartilhe seus documentos</Text>
            <Text style={stylesInitial.paragrafo}>No <Text style={styles.bold}> Easy Doc</Text>, você pode compartilhar seus documentos em formatos <Text style={styles.bold}> PDF ou DOCX </Text>com apenas um clique. Mantenha todos na mesma página, compartilhando seus documentos de maneira eficiente e eficaz.</Text>
            <View style={styles2.iconsWordPdfContainer}>
                <Image style={styles2.iconWordPdf} source={wordImg} />
                <Image style={styles2.iconWordPdf} source={pdfImg} />
            </View>
        </View>
    )
}
const SpecificStyle = StyleSheet.create({
    right:{
        textAlign:'right'
    }
})