import { Box, Button, Input,Flex } from '@chakra-ui/react';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';


const Department = () => {
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
            <form onSubmit={addDepartment}>
                <Box w='40%' mx='auto' marginTop='4rem' marginBottom='2rem' alignItems='center'>
                    <Input borderRadius='unset' w='80%' type='text' placeholder='Thêm phòng ban' value={departmentTemp.department} onChange={(e) => setDepartmentTemp({id:new Date().getTime().toString(),department: e.target.value})}/>
                    <Button w='20%' marginBottom='4px' type='button' bg='#EDF2F7'  borderRadius='unset' onClick={addDepartment}>Thêm</Button>
                </Box>
            </form>
            {listDepartment.map((item,index) => {
                const {id,department} = item;
                return(
                    <Link key={index} to={`/manager/${department}`}>
                        <Flex  w='40%' mx='auto' cursor='pointer' marginTop='0.5rem' padding='8px 0' alignItems='center' textTransform='capitalize' justifyContent='center' bg='#EDF2F7'>
                                {department}
                        </Flex>
                     </Link>
                )
            })}
        </>
    )
}

export default Department
