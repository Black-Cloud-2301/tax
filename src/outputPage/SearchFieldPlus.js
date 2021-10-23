import React, { useState } from 'react';
import {
  Box,
  
  Input,
  FormLabel,
  InputGroup,
  Button,
  InputRightElement,
  
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const SearchFieldPlus = () => {
    const [idEmployee,setIdEmployee] = useState(0);
    const {listEmploy} = useGlobalContext();

    
    return (
        <Box bg="gray.200" minH="100vh" p={20} display="flex"  justifyContent="center">
            <Box w="100%" text="center" display="flex" justifyContent="center">
                <FormLabel paddingTop="8px"  ml={8}> Nhập mã nhân viên</FormLabel>
                <InputGroup size="md" w={60} mb={12} >
                <Input
                    bg="white"
                    pr="4.5rem"
                    type="tel"
                    placeholder="Mã nhân viên"
                    onChange={(e) => setIdEmployee(e.target.value)}
                />
                <InputRightElement width="4.5rem" >
                    <Link to={`/output/${idEmployee}`}>
                        <Button h="1.75rem" size="sm" >
                        Search
                        </Button>
                    </Link>
                </InputRightElement>
                </InputGroup>
            </Box>
        </Box>
    )
}

export default SearchFieldPlus
