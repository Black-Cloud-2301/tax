import { Grid,Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Grid  templateColumns="repeat(1,1fr)" gap={6} w="75%" mx="auto" marginTop="10rem">
            <Link to='/department'>
                <Flex cursor='pointer' marginBottom='8px' padding="8px 0px" align="center" justify="center" w="100%" h="100%" bg="#EDF2F7">Quản lý phòng ban</Flex>
            </Link>
            <Link to='/setting'>
                <Flex  cursor='pointer' marginBottom='8px' padding="8px 0px" align="center" justify="center" w="100%" h="100%" bg="#EDF2F7">Thiết lập các hạn mức</Flex>

            </Link>
        </Grid>

    )
}

export default Home
