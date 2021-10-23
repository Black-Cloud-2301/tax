import React from 'react'
import { Flex ,Text} from '@chakra-ui/layout'
const ErrorPage = () => {
    return (
        <Flex bg="gray.200" w="100%" h="100vh" justifyContent="center" align="center">
            <Text fontSize="64px" color="gray.400">
                Page not found
            </Text>
        </Flex>
    )
}

export default ErrorPage
