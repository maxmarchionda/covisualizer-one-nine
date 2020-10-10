import { theme } from '@chakra-ui/core'

// import EuclidCircularA from "@public/fonts/EuclidCircularA-Regular.ttf";

const customIcons = {
    icon1: {
        path: <path fill="currentColor" d="..." />,
        // If the icon's viewBox is `0 0 24 24`, you can ignore `viewBox`
        viewBox: '0 0 40 40',
    },
    icon2: {
        path: (
            <g fill="currentColor">
                <path d="..." />
            </g>
        ),
    },
}

const customColors = {
    gray: {
        50: '#EDEDED',
        100: '#D5D5D5',
        200: '#BCBCBC',
        300: '#A4A4A4',
        400: '#8C8C8C',
        500: '#737373',
        600: '#5B5B5B',
        700: '#434343',
        800: '#2A2A2A',
        900: '#121212',
    },
}

const customFonts = {
    body: 'CrimsonText, Helvetica, serif',
    heading: 'OpenSans, Arial, sans-serif',
    mono: 'Menlo, monospace',
}

export const customTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        ...customColors,
    },
    icons: {
        ...theme.icons,
        ...customIcons,
    },
    fonts: {
        ...customFonts,
    },
}
