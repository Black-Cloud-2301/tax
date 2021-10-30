import React from 'react'
import { Box, Button, Input,Flex,FormLabel,InputGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
const Setting = () => {
    const {except,setExcept,handleChangeExcept} = useGlobalContext();
    const {bhxhExcept,deductibleLevel,dependentExcept} = except;
    
    return (
        <>
            <Flex w='80%' fontSize='2rem' mx='auto' marginTop='4rem' marginBottom='2rem' justifyContent='center' alignItems='center'>
                Thiết lập các hạn mức
            </Flex>    
            <Flex w='80%' mx='auto' flexDirection='column' alignItems='center'>
                <Flex justifyContent='flex-start' w='50%'>
                    <FormLabel paddingTop="8px"  ml={8}> Nhập hạn mức TNCN</FormLabel>
                    <InputGroup size="md" w={60} mb={12} marginLeft='6.75rem'>
                    <Input
                        bg="white"
                        pr="4.5rem"
                        type="tel"
                        value={deductibleLevel}
                        placeholder="Hạn mức TNCN"
                        onChange={e => setExcept({...except,deductibleLevel:e.target.value})}
                    />
                    </InputGroup>
                </Flex>
                <Flex justifyContent='flex-start' w='50%'>
                    <FormLabel paddingTop="8px"  ml={8}> Nhập mức miễn trừ bhxh</FormLabel>
                    <InputGroup size="md" w={60} mb={12} marginLeft='5.2rem'>
                    <Input
                        bg="white"
                        pr="4.5rem"
                        type="tel"
                        value={bhxhExcept}
                        placeholder="Mức miễn trừ bhxh"
                        onChange={e => setExcept({...except,bhxhExcept:e.target.value})}
                    />
                    </InputGroup>

                </Flex>
                <Flex justifyContent='flex-start' w='50%'>
                    <FormLabel paddingTop="8px"  ml={8}> Nhập mức miễn trừ người phụ thuộc</FormLabel>
                    <InputGroup size="md" w={60} mb={12} >
                    <Input
                        bg="white"
                        pr="4.5rem"
                        type="tel"
                        value={dependentExcept}
                        placeholder="Mức miễn trừ người phụ thuộc"
                        onChange={e => setExcept({...except,dependentExcept:e.target.value})}
                    />
                    </InputGroup>
                </Flex>
                <Box w='300px'>
                    <Link to='/' >
                        <Button w='100%' onClick={handleChangeExcept} type='button'>Xác Nhận</Button>
                    </Link>
                </Box>
            </Flex>
        </>
    )
}

export default Setting
