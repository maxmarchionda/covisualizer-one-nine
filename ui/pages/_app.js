import { ChakraProvider, css, Global } from '@chakra-ui/core'
import seo from '../seo.config.js'
import { DefaultSeo } from 'next-seo'
import { customTheme } from '../ui/utils/theme.js'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider resetCSS theme={customTheme}>
            <Global
                styles={css`
                    #__next {
                        height: 100%;
                    }
                    @font-face {
                        font-family: 'OpenSans';
                        src: url('/fonts/Open_Sans');
                    }
                    @font-face {
                        font-family: 'CrimsonText';
                        src: url('/fonts/Crimson_Text');
                    }
                `}
            />
            <DefaultSeo {...seo} />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
