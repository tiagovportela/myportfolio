import { ChakraProvider } from "@chakra-ui/react";
import  Layout  from "../compoments/layouts/main";
import Fonts from "../compoments/fonts";
import theme from '../libs/theme'
import { AnimatePresence } from "framer-motion";

import "@fontsource/carlito/400.css"

const Website = ({Component, pageProps, router}) => {
    return(
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router = {router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website