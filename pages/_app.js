import { ChakraProvider } from "@chakra-ui/react";
import  Layout  from "../compoments/layouts/main";
import Fonts from "../compoments/fonts";
import theme from '../libs/theme'

const Website = ({Component, pageProps, router}) => {
    return(
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router = {router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website