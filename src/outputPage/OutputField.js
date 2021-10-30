import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';
import { Link,useParams } from 'react-router-dom';
// import { data } from '../data/tempData';
import { noteData } from '../database/configFirebase';
import { useGlobalContext } from '../context';
import { oneMonthTax,realTax,tempTax } from '../handleTaxTNCN/handleTax';
//thêm dữ liệu vào firebase
// const addData = () => {
//   var dataAdd = {};
//   dataAdd.name = data.name;
//   dataAdd.email = data.email;
//   dataAdd.address = data.address;
//   dataAdd.phone = data.phone;
//   dataAdd.day = data.day;
//   dataAdd.month = data.month;
//   dataAdd.year = data.year;
//   dataAdd.taxYear = data.taxYear;
//   dataAdd.dependent = data.dependent;
//   dataAdd.bhxh = data.bhxh;
//   dataAdd.valueMonth1 = data.valueMonth1;
//   dataAdd.valueMonth2 = data.valueMonth2;
//   dataAdd.valueMonth3 = data.valueMonth3;
//   dataAdd.valueMonth4 = data.valueMonth4;
//   dataAdd.valueMonth5 = data.valueMonth5;
//   dataAdd.valueMonth6 = data.valueMonth6;
//   dataAdd.valueMonth7 = data.valueMonth7;
//   dataAdd.valueMonth8 = data.valueMonth8;
//   dataAdd.valueMonth9 = data.valueMonth9;
//   dataAdd.valueMonth10 = data.valueMonth10;
//   dataAdd.valueMonth11 = data.valueMonth11;
//   dataAdd.valueMonth12 = data.valueMonth12;
//   //console.log(dataAdd);
//   noteData.push(dataAdd);
// };

const OutputField = () => {
  const {id} = useParams();
  
  const {listEmploy,except} = useGlobalContext();
  const {bhxhExcept,deductibleLevel,dependentExcept} = except;
  console.log(typeof dependentExcept)
  const data = listEmploy.find((item) => item.id === id)
  
  // const oneMonthTax = income => {
  //   if (data.taxYear >= 2021) {
  //     let result =
  //       income -
  //       11 -
  //       data.dependent * 4.4 -
  //       (data.bhxh === 'true' ? income * 0.08 : 0);
  //     if (result <= 0) {
  //       return 0;
  //     } else if (result <= 5) result = result * 0.05;
  //     else if (result <= 10) result = result * 0.1 - 0.25;
  //     else if (result <= 18) result = result * 0.15 - 0.75;
  //     else if (result <= 32) result = result * 0.2 - 1.65;
  //     else if (result <= 52) result = result * 0.25 - 3.25;
  //     else if (result <= 80) result = result * 0.3 - 5.85;
  //     else result = result * 0.35 - 9.85;
  //     return result;
  //   } else {
  //     let result =
  //       income -
  //       9 -
  //       data.dependent * 4.4 -
  //       (data.bhxh === 'true' ? income * 0.08 : 0);
  //     if (result <= 0) {
  //       return 0;
  //     } else if (result <= 5) result = result * 0.05;
  //     else if (result <= 10) result = result * 0.1 - 0.25;
  //     else if (result <= 18) result = result * 0.15 - 0.75;
  //     else if (result <= 32) result = result * 0.2 - 1.65;
  //     else if (result <= 52) result = result * 0.25 - 3.25;
  //     else if (result <= 80) result = result * 0.3 - 5.85;
  //     else result = result * 0.35 - 9.85;
  //     return result;
  //   }
  // };
  //thuế thực tế
  // const realTax = () => {
  //   if (data.taxYear >= 2021) {
  //     let result =
  //       data.valueMonth1 +
  //       data.valueMonth2 +
  //       data.valueMonth3 +
  //       data.valueMonth4 +
  //       data.valueMonth5 +
  //       data.valueMonth6 +
  //       data.valueMonth7 +
  //       data.valueMonth8 +
  //       data.valueMonth9 +
  //       data.valueMonth10 +
  //       data.valueMonth11 +
  //       data.valueMonth12;

  //     result =
  //       result -
  //       (data.bhxh === 'true' ? result * 0.08 : 0) -
  //       data.dependent * 4.4 * 12 -
  //       132;
  //     if (result <= 0) return 0;
  //     else if (result <= 60) return result * 0.05;
  //     else if (result <= 120) return result * 0.1 - 3;
  //     else if (result <= 216) return result * 0.15 - 9;
  //     else if (result <= 384) return result * 0.2 - 23.4;
  //     else if (result <= 624) return result * 0.25 - 57;
  //     else if (result <= 960) return result * 0.3 - 117;
  //     else return result * 0.35 - 217.8;
  //   } else {
  //     let result =
  //       parseInt(data.valueMonth1) +
  //       data.valueMonth2 +
  //       data.valueMonth3 +
  //       data.valueMonth4 +
  //       data.valueMonth5 +
  //       data.valueMonth6 +
  //       data.valueMonth7 +
  //       data.valueMonth8 +
  //       data.valueMonth9 +
  //       data.valueMonth10 +
  //       data.valueMonth11 +
  //       data.valueMonth12;

  //     result =
  //       result -
  //       (data.bhxh === 'true' ? result * 0.08 : 0) -
  //       data.dependent * 4.4 * 12 -
  //       108;

  //     if (result <= 0) return 0;
  //     else if (result <= 60) return result * 0.05;
  //     else if (result <= 120) return result * 0.1 - 3;
  //     else if (result <= 216) return result * 0.15 - 9;
  //     else if (result <= 384) return result * 0.2 - 23.4;
  //     else if (result <= 624) return result * 0.25 - 57;
  //     else if (result <= 960) return result * 0.3 - 117;
  //     else return result * 0.35 - 217.8;
  //   }
  // };
  //thuế tạm thu
  // const tempTax = () => {
  //   const result =
  //     oneMonthTax(data.valueMonth1) +
  //     oneMonthTax(data.valueMonth2) +
  //     oneMonthTax(data.valueMonth3) +
  //     oneMonthTax(data.valueMonth4) +
  //     oneMonthTax(data.valueMonth5) +
  //     oneMonthTax(data.valueMonth6) +
  //     oneMonthTax(data.valueMonth7) +
  //     oneMonthTax(data.valueMonth8) +
  //     oneMonthTax(data.valueMonth9) +
  //     oneMonthTax(data.valueMonth10) +
  //     oneMonthTax(data.valueMonth11) +
  //     oneMonthTax(data.valueMonth12);
  //   return result.toFixed(2);
  // };

  // addData();
  if(data === undefined){
    return( 
        <Flex bg="gray.200" w="100%" h="100vh" justifyContent="center" align="center">
            <Text fontSize="64px" color="gray.400">
                Employee Not Found
            </Text>
        </Flex>)
  }
  
  return (
    <Box bg="gray.200" p={20}>
      <Box mx="auto">
        <Flex mb={20} justify="space-center">
          <Flex w="50%"  justify='center'>
            <Box>
              <Text mb={4}>Mã nhân viên:</Text>
              <Text mb={4}>Ngày tháng năm sinh:</Text>
              <Text mb={4}>Số điện thoại:</Text>
              <Text mb={4}>Email:</Text>
              <Text mb={4}>Địa chỉ: </Text>
            </Box>
            <Box ml={12}>
              <Text mb={4}>{data.id}</Text>
              <Text mb={4}>
                {data.day}/{data.month}/{data.year}
              </Text>
              <Text mb={4}>{data.phone}</Text>
              <Text mb={4}>{data.email}</Text>
              <Text mb={4}>{data.address}</Text>
            </Box>
          </Flex>
          <Flex w="50%" justify='center'>
            <Box>
              <Text mb={4}>Họ và Tên:</Text>
              <Text mb={4}>Năm tính thuế</Text>
              <Text mb={4}>BHXH:</Text>
              <Text mb={4}>Số người phụ thuộc:</Text>
             
            </Box>
            <Box ml={12}>
              <Text mb={4}>{data.name}</Text>
              <Text mb={4}>
                {data.taxYear}
              </Text>
              <Text mb={4}>{data.bhxh?'Có':'Không'}</Text>
              <Text mb={4}>{data.dependent}</Text>
              
            </Box>
          </Flex>
        </Flex>
        <Table
          variant="simple"
          w="70%"
          bg="white"
          borderRadius="0.25rem"
          mx="auto"
          boxShadow="2xl"
        >
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>Tháng</Th>
              <Th isNumeric>Thu Nhập(Triệu VND)</Th>
              <Th isNumeric>Thuế thu nhập(Triệu VND)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Tháng 1</Td>
              <Td isNumeric>{data.valueMonth1}</Td>
              <Td isNumeric>{oneMonthTax(data.valueMonth1,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>Tháng 2</Td>
              <Td isNumeric>{data.valueMonth2}</Td>
              <Td isNumeric>{oneMonthTax(data.valueMonth2,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>Tháng 3</Td>
              <Td isNumeric>{data.valueMonth3}</Td>
              <Td isNumeric>{oneMonthTax(data.valueMonth3,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>Tháng 4</Td>
              <Td isNumeric>{data.valueMonth4}</Td>
              <Td isNumeric>{oneMonthTax(data.valueMonth4,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>Tháng 5</Td>
              <Td isNumeric>{data.valueMonth5}</Td>
              <Td isNumeric>{oneMonthTax(data.valueMonth5,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>Tháng 6</Td>
              <Td isNumeric>{data.valueMonth6}</Td>
              <Td isNumeric>{oneMonthTax(data.valueMonth6,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>Tháng 7</Td>
              <Td isNumeric>{data.valueMonth7}</Td>
              <Td isNumeric>{oneMonthTax(data.valueMonth7,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>Tháng 8</Td>
              <Td isNumeric>{data.valueMonth8}</Td>
              <Td isNumeric>{oneMonthTax(data.valueMonth8,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>Tháng 9</Td>
              <Td isNumeric>{data.valueMonth9}</Td>
              <Td isNumeric>{oneMonthTax(data.valueMonth9,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>Tháng 10</Td>
              <Td isNumeric>{data.valueMonth10}</Td>
              <Td isNumeric>{oneMonthTax(data.valueMonth10,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>Tháng 11</Td>
              <Td isNumeric>{data.valueMonth11}</Td>
              <Td isNumeric>{oneMonthTax(data.valueMonth11,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}</Td>
            </Tr>
            <Tr>
              <Td>Tháng 12</Td>
              <Td isNumeric>{data.valueMonth12}</Td>
              <Td isNumeric>{oneMonthTax(data.valueMonth12,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}</Td>
            </Tr>
          </Tbody>
        </Table>
        <Box w="70%" mx="auto" textAlign="right" my={8} fontSize="xl">
          <Text>
            Tổng thuế TNCN đã tạm nộp:{' '}
            <Text as="span" color="red">
              {tempTax(data,bhxhExcept,dependentExcept,deductibleLevel)}
            </Text>{' '}
            triệu VND
          </Text>
          <Text>
            Tổng thuế TNCN thực tế:{' '}
            <Text as="span" color="red">
              {realTax(data,bhxhExcept,dependentExcept,deductibleLevel).toFixed(2)}
            </Text>{' '}
            triệu VND
          </Text>
          <Text>
            {realTax(data,bhxhExcept,dependentExcept,deductibleLevel) < tempTax(data,bhxhExcept,dependentExcept,deductibleLevel) ? `Nhận lại: ` : `Nộp thêm: `}{' '}
            <Text as="span" color="red">
              {realTax(data,bhxhExcept,dependentExcept,deductibleLevel) < tempTax(data,bhxhExcept,dependentExcept,deductibleLevel)
                ? (tempTax(data,bhxhExcept,dependentExcept,deductibleLevel) - realTax(data,bhxhExcept,dependentExcept,deductibleLevel)).toFixed(2)
                : (realTax(data,bhxhExcept,dependentExcept,deductibleLevel) - tempTax(data,bhxhExcept,dependentExcept,deductibleLevel)).toFixed(2)}
            </Text>
            triệu VND
          </Text>
        </Box>
      </Box>
      <Flex w='30%' mx='auto' justifyContent='center' textAlign="center">
        <Link to={`/report`}>
          <Button
            bg="white"
            _hover={{ background: 'blue.500', color: 'white' }}
          >
            Quay Về
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default OutputField;
