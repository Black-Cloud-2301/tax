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
import { Link } from 'react-router-dom';
import { data } from '../data/tempData';
import { useGlobalContext } from '../context';



const InputField = () => {
  const {setEmployee,employee,handleAddEmployee,listEmploy} = useGlobalContext();
 
  

  
    
  
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
          <GridItem colSpan={2}>
            <Flex justify="space-between">
              <Box>
                <FormLabel> Năm tính thuế </FormLabel>
                <Input
                  type="text"
                  placeholder="2021"
                  size="md"
                  w={32}
                  onChange={e => setEmployee({...employee,taxYear: parseInt(e.target.value)})}
                />
              </Box>
              <Box>
                <FormLabel> Bảo hiểm xã hội </FormLabel>
                <Select
                  type="text"
                  size="md"
                  placeholder="Chọn"
                  onChange={e => setEmployee({...employee,bhxh : Boolean(e.target.option)})}
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
              onChange={e => setEmployee({...employee,valueMonth1 :parseFloat(e.target.value)})}
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 2 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              onChange={e => setEmployee({...employee,valueMonth2 :parseFloat(e.target.value)})}

            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 3 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              onChange={e => setEmployee({...employee,valueMonth3 :parseFloat(e.target.value)})}
             
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 4 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              onChange={e => setEmployee({...employee,valueMonth4 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 5 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              onChange={e => setEmployee({...employee,valueMonth5 :parseFloat(e.target.value)})}
             
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 6 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              onChange={e => setEmployee({...employee,valueMonth6 :parseFloat(e.target.value)})}
             
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 7 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              onChange={e => setEmployee({...employee,valueMonth7 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 8 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              onChange={e => setEmployee({...employee,valueMonth8 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 9 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              onChange={e => setEmployee({...employee,valueMonth9 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 10 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              onChange={e => setEmployee({...employee,valueMonth10 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 11 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              onChange={e => setEmployee({...employee,valueMonth11 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
          <GridItem>
            <FormLabel> Tháng 12 </FormLabel>
            <Input
              placeholder="0"
              size="md"
              onChange={e => setEmployee({...employee,valueMonth12 :parseFloat(e.target.value)})}
              
            />
          </GridItem>
        </Grid>
        <Box textAlign="center">
          <Link to="/">
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
