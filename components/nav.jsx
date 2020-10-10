import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    useColorMode,
} from '@chakra-ui/core'

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex
            alignItems="center"
            justifyContent="space-around"
            w="100%"
            h="69px"
            bg={colorMode === 'light' ? 'gray.100' : 'gray,800'}
        >
            <Image src="cov19.png" h="50px"></Image>
            <Heading visibility="hidden">Covisualizer 19</Heading>
            <Button colorScheme="black" size="sm" variant="outline">
                Create an Account
            </Button>
        </Flex>
    )
}

export default Nav
