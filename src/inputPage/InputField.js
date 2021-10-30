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



const InputField = () => {
  const {setEmployee,employee,handleAddEmployee,listEmploy} = useGlobalContext();
  const {name} = useParams();
  console.log(name);

  useEffect(() => {
    setEmployee({...employee,department:name});
  },[])

  return (
    <>
      <Box w="70%" mx="auto">
        <Grid mt={20} templateColumns="repeat(3,1fr)" gap={12}>
         <GridItem>
            <FormLabel> Mã nhân viên </FormLabel>
            <Input
              placeholder="0001"
              w="30"
              errorBorderColor="red.300"
              onChange={(e) => setEmployee({...employee,id: e.target.value })}
            />
          </GridItem>
          <GridItem>
            <FormLabel> Họ và Tên </FormLabel>
            <Input
              placeholder="Nguyễn Văn A"
              size="md"
              errorBorderColor="red.300"
              onChange={(e) => setEmployee({...employee,name: e.target.value })}
            />
          </GridItem>
          <GridItem>
            <FormLabel> Ngày Sinh </FormLabel>
            <Flex align="center">
              <FormLabel> Ngày </FormLabel>
              <Select
                w={20}
                placeholder="0"
              onChange={(e) => setEmployee({...employee,day: e.target.value })}
                
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </Select>
              <FormLabel ml={8}> Tháng </FormLabel>
              <Select
                w={20}
                selected="selected"
                placeholder="0"
                onChange={(e) => setEmployee({...employee,month: e.target.value })}

              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </Select>
              <FormLabel ml={8}> Năm </FormLabel>
              <Input
                placeholder="2021"
                w={20}
                size="md"
                onChange={(e) => setEmployee({...employee,year: e.target.value })}

              />
            </Flex>
          </GridItem>
        </Grid>
        <Grid mt={20} templateColumns="repeat(2,1fr)" gap={12}>

          <GridItem>
            <FormLabel> Số điện thoại </FormLabel>
            <Input
              type="tel"
              placeholder="0909 090 099"
              size="md"
              onChange={(e) => setEmployee({...employee,phone: e.target.value })}

            />
          </GridItem>
          <GridItem>
            <FormLabel> Email </FormLabel>
            <Input
              type="email"
              placeholder="thue@gmail.com"
              size="md"
              onChange={(e) => setEmployee({...employee,email: e.target.value })}

            />
          </GridItem>
          <GridItem colSpan={2}>
            <FormLabel> Địa chỉ </FormLabel>
            <Input
              type="text"
              placeholder="Nghiêm Xuân Yêm, Đại Kim, Hoàng Mai, Hà Nội "
              size="md"
              onChange={(e) => setEmployee({...employee,address: e.target.value })}

            />
          </GridItem>
        </Grid>
        <Box textAlign="center">
          <Link to={`/manager/${name}`}>
            <Button my={12} w={60} onClick={handleAddEmployee}>
              Nhập thông tin nhân viên 
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default InputField;
