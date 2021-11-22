import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import theme from '../libs/theme'

export default class Documents extends NextDocument {
    render () {
        return (
            <Html lang ="en">
                <Head/>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        )
    }
}