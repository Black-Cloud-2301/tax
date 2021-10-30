import { Box, Flex, Grid,Button } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link,useParams } from 'react-router-dom'
import { useGlobalContext } from '../context';
import { realTax } from '../handleTaxTNCN/handleTax';


const ReportDepartment = () => {
   const {listEmploy,except} = useGlobalContext();
   const {bhxhExcept,dependentExcept,deductibleLevel} = except;
    // console.log(listEmploy);
    const {name} = useParams();
    // console.log(name);
    const data = listEmploy.filter((item) => item.department === name)
    return (
        <>  
            
            <Flex margin="32px 0 " fontSize="44px" align="center" justify="center" w="100%">Thông tin nhân viên trong phòng {name}</Flex>
            
            <Grid  templateColumns="repeat(6,1fr)" gap={5} w="95%" mx="auto" marginBottom="14px">
                <Flex border="1px solid #EDF2F7" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">Mã nv</Flex>
                <Flex border="1px solid #EDF2F7" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">Họ và tên</Flex>
                <Flex border="1px solid #EDF2F7" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">BHXH</Flex>
                <Flex border="1px solid #EDF2F7" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">Số người phụ thuộc</Flex>
                <Flex border="1px solid #EDF2F7" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">Thuế TNCN</Flex>
                <Flex border="1px solid #EDF2F7" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white"></Flex>
            </Grid>
            <Box border="1px solid #EDF2F7" w="95%" mx="auto" >

                {data.map((employee) => {
                    const {id,name,bhxh,dependent} = employee;
                    let BHXH = 'Không';
                    if(BHXH === 'true'){
                        BHXH = 'Có'
                    }

                    
                    return(
                        
                            <Grid key={id}   templateColumns="repeat(6,1fr)" gap={5} w="100%" mx="auto"  borderBottom="1px solid #EDF2F7" paddingTop="8px" paddingBottom="8px">
                                <Flex  padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">{id}</Flex>
                                <Flex  padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">{name}</Flex>
                                <Flex  padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">{BHXH}</Flex>
                                <Flex  padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">{dependent}</Flex>
                                <Flex  padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">{realTax(employee,bhxhExcept,dependentExcept,deductibleLevel)}</Flex>
                                <Link to={`/output/${id}`}>
                                    <Button cursor="pointer" padding="4px 0px" align="center" justify="center" w="100%" h="100%" bg="white">Chi Tiết</Button>
                                </Link>
                            </Grid>
                        
                    )
                })}
                
            </Box>
            {/* <Box textAlign="center">
          <Link to={`/manager/${name}/input`}>
            <Button my={12} w={60}>
              Thêm nhân viên
            </Button>
          </Link>
        </Box> */}
        </>
    )
}

export default ReportDepartment
