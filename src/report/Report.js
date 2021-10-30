import { Box, Button, Input,Flex } from '@chakra-ui/react';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Report = () => {
    const {departmentTemp,listDepartment,setDepartmentTemp,addDepartment} = useGlobalContext();
    // const [department,setDepartment] = useState('');
    // const [listDepartment,setListDepartment] = useState([])
    

    // const handleAdd=(e) => {
    //     e.preventDefault();
    //     setListDepartment([...listDepartment,department]);
    //     setDepartment('');
    // }
    
    return (
        <>
            <Flex fontSize='2rem' mx='auto' justifyContent='center' marginTop='2rem'>Báo cáo Phòng ban</Flex>
            <Box marginTop='6rem'>
                
                {listDepartment.map((item,index) => {
                    const {id,department} = item;
                    return(
                        <Link key={index} to={`/report/${department}`}>
                            <Flex  w='40%' mx='auto' cursor='pointer' marginTop='0.5rem' padding='8px 0' alignItems='center' textTransform='capitalize' justifyContent='center' bg='#EDF2F7'>
                                    {department}
                            </Flex>
                        </Link>
                    )
                })}
            </Box>
        </>
    )
}

export default Report
