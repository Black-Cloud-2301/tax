import React,{useState,useEffect} from 'react';
import {
  Input,
  FormLabel,
  Select,
  Flex,
  Grid,
  GridItem,
  Button,
  Box,
} from '@chakra-ui/react';
import { Link,useParams } from 'react-router-dom';
import { data } from '../data/tempData';
import { useGlobalContext } from '../context';



const InputTax = () => {
  const {setEmployee,employee,handleAddEmployee,listEmploy,resetListEmploy,handleOutput} = useGlobalContext();
  const {id} = useParams();
  const data = listEmploy.filter((item,) => item.id === id);
  
    const handleTaxPerson = () => {
        const newEmploy = listEmploy.filter((item) => item.id !== id);
        console.log(newEmploy);
        resetListEmploy(newEmploy);
        console.log('employ',employee)
        handleOutput(newEmploy);
        // handleAddEmployee();
    }

  useEffect(()=> {
      setEmployee({
          department:data[0].department,
          id:data[0].id,
          name:data[0].name,
          day:data[0].day,
          month:data[0].month,
          year:data[0].year,
          phone: data[0].phone,
          email: data[0].email,
            address: data[0].address,
            taxYear: data[0].taxYear,
            bhxh: data[0].bhxh,
            dependent: data[0].dependent,
            valueMonth1: data[0].valueMonth1,
            valueMonth2: data[0].valueMonth2,
            valueMonth3: data[0].valueMonth3,
            valueMonth4: data[0].valueMonth4,
            valueMonth5: data[0].valueMonth5,
            valueMonth6: data[0].valueMonth6,
            valueMonth7: data[0].valueMonth7,
            valueMonth8: data[0].valueMonth8,
            valueMonth9: data[0].valueMonth9,
            valueMonth10: data[0].valueMonth10,
            valueMonth11: data[0].valueMonth11,
            valueMonth12: data[0].valueMonth12,
      })

  },[])
//   code in here==========================
  console.log(employee)
  return (
    <>
      <Box w="70%" mx="auto">
         <Grid mt={20} templateColumns="repeat(2,1fr)" gap={12}>
          <GridItem colSpan={2}>
            <Flex justify="space-between">
              <Box>
                <FormLabel> Năm tính thuế </FormLabel>
                <Input
                  type="text"
                  placeholder="2021"
                  size="md"
                  w={32}
                  value={employee.taxYear}
                  onChange={e => setEmployee({...employee,taxYear: parseInt(e.target.value)})}
                />
              </Box>
              <Box>
                <FormLabel> Bảo hiểm xã hội </FormLabel>
                <Select
                  type="text"
                  size="md"
                  placeholder="Chọn"
                  value={employee.bhxh}
                  onChange={(e) => setEmployee({...employee,bhxh :e.target.value})}
                >
                  <option value={true}>Có</option>
                  <option value={false}>Không</option>
                </Select>
              </Box>
              <Box>
                <FormLabel> Số người phụ thuộc </FormLabel>
                <Input
                  type="text"
                  placeholder="0"
                  size="md"
                  w={36}
                  value={employee.dependent}
                  onChange={e => setEmployee({...employee,dependent : parseInt(e.target.value)})}
                />
              </Box>
            </Flex>
          </GridItem>
        </Grid>
        <FormLabel my={12} fontSize="2xl" textAlign="center">
          Thu Nhập Các Tháng
        </FormLabel>
        <Grid templateColumns="repeat(4,1fr)" gap={12}>
          <GridItem>
            <FormLabel> Tháng 1 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              value={employee.valueMonth1}
              onChange={e => setEmployee({...employee,valueMonth1 :parseFloat(e.target.value)})}
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 2 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              value={employee.valueMonth2}

              onChange={e => setEmployee({...employee,valueMonth2 :parseFloat(e.target.value)})}

            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 3 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              value={employee.valueMonth3}
              onChange={e => setEmployee({...employee,valueMonth3 :parseFloat(e.target.value)})}
             
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 4 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              value={employee.valueMonth4}
              onChange={e => setEmployee({...employee,valueMonth4 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 5 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              value={employee.valueMonth5}

              onChange={e => setEmployee({...employee,valueMonth5 :parseFloat(e.target.value)})}
             
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 6 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              value={employee.valueMonth6}
              onChange={e => setEmployee({...employee,valueMonth6 :parseFloat(e.target.value)})}
             
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 7 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              value={employee.valueMonth7}
              onChange={e => setEmployee({...employee,valueMonth7 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 8 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              value={employee.valueMonth8}
              onChange={e => setEmployee({...employee,valueMonth8 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 9 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              value={employee.valueMonth9}
              onChange={e => setEmployee({...employee,valueMonth9 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 10 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              value={employee.valueMonth10}
              onChange={e => setEmployee({...employee,valueMonth10 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 11 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              value={employee.valueMonth11}
              onChange={e => setEmployee({...employee,valueMonth11 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 12 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              value={employee.valueMonth12}
              onChange={e => setEmployee({...employee,valueMonth12 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
        </Grid>
        <Box textAlign="center">
          <Link to={`/output/${id}`}>
            <Button my={12} w={60} onClick={handleTaxPerson}>
              Tính thuế thu nhập cá nhân
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default InputTax;
