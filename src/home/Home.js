import { Box, Flex, Grid,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { realTax } from '../handleTaxTNCN/handleTax';


const Home = () => {
    const {listEmploy} = useGlobalContext();
    console.log(listEmploy);
    
    return (
        <>  
            <Flex margin="32px 0 " fontSize="44px" align="center" justify="center" w="100%">Thông tin nhân viên trong công ty</Flex>
            
            <Grid  templateColumns="repeat(6,1fr)" gap={5} w="95%" mx="auto" marginBottom="14px">
                <Flex border="1px solid #EDF2F7" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">Mã sv</Flex>
                <Flex border="1px solid #EDF2F7" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">Họ và tên</Flex>
                <Flex border="1px solid #EDF2F7" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">Năm quyết toán thuế</Flex>
                <Flex border="1px solid #EDF2F7" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">BHYT</Flex>
                <Flex border="1px solid #EDF2F7" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">Số người phụ thuộc</Flex>
                <Flex border="1px solid #EDF2F7" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">Thuế TNCN (trđ)</Flex>
            </Grid>
            <Box border="1px solid #EDF2F7" w="95%" mx="auto" paddingTop="8px">

                {listEmploy.map((employee) => {
                    const {id,name,taxYear,bhxh,dependent} = employee;
                    const realTNCN = realTax(employee).toFixed(2);
                    console.log(realTax(employee))
                    return(
                        <Link to={`/output/${id}`} >
                            <Grid key={id} cursor="pointer" templateColumns="repeat(6,1fr)" gap={5} w="100%" mx="auto"  borderBottom="1px solid #EDF2F7" paddingBottom="8px">
                                <Flex  padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">{id}</Flex>
                                <Flex  padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">{name}</Flex>
                                <Flex  padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">{taxYear}</Flex>
                                <Flex  padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">{Boolean(bhxh)?'Có':'Không'}</Flex>
                                <Flex  padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">{dependent}</Flex>
                                <Flex  padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">{realTNCN}</Flex>
                            </Grid>
                        </Link>
                    )
                })}
                
            </Box>
            <Box textAlign="center">
          <Link to="/input">
            <Button my={12} w={60}>
              Thêm nhân viên
            </Button>
          </Link>
        </Box>
        </>
    )
}

export default Home
