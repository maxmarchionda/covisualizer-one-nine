import {
    Box,
    Button,
    Flex,
    Heading,
    IconButton,
    Image,
    Text,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/core'

import { RiMoonFill, RiSunFill } from 'react-icons/ri'

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const icon = useColorModeValue(<RiSunFill />, <RiMoonFill />)
    const logoSrc = useColorModeValue('cov19-new.png', 'cov19-white.png')

    return (
        <Flex
            alignItems="center"
            justifyContent="space-around"
            w="100%"
            h="69px"
        >
            <Image src="cov19-new.png" h="50px"></Image>
            <Heading visibility="hidden">Covisualizer 19</Heading>
            <Box className="button-box">
                <Button colorScheme="black" size="sm" variant="outline">
                    Create an Account
                </Button>

                <IconButton
                    ml={45}
                    icon={icon}
                    variant="ghost"
                    colorScheme="black"
                    onClick={toggleColorMode}
                />
            </Box>
        </Flex>
    )
}

export default Nav
