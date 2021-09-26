import React, { useState } from 'react';
import { noteData } from '../database/configFirebase';
import {
  Box,
  Text,
  Input,
  FormLabel,
  InputGroup,
  Button,
  InputRightElement,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// lấy dữ liệu từ Firebase
const getData = () => {
  var arrayData = [];
  noteData.on('value', notes => {
    notes.forEach(element => {
      const key = element.key;
      const name = element.val().name;
      const email = element.val().email;
      const address = element.val().address;
      const phone = element.val().phone;
      const day = element.val().day;
      const year = element.val().year;
      const month = element.val().month;
      const bhxh = element.val().bhxh;
      const dependent = element.val().dependent;
      const taxYear = element.val().taxYear;
      const valueMonth1 = element.val().valueMonth1;
      const valueMonth2 = element.val().valueMonth2;
      const valueMonth3 = element.val().valueMonth3;
      const valueMonth4 = element.val().valueMonth4;
      const valueMonth5 = element.val().valueMonth5;
      const valueMonth6 = element.val().valueMonth6;
      const valueMonth7 = element.val().valueMonth7;
      const valueMonth8 = element.val().valueMonth8;
      const valueMonth9 = element.val().valueMonth9;
      const valueMonth10 = element.val().valueMonth10;
      const valueMonth11 = element.val().valueMonth11;
      const valueMonth12 = element.val().valueMonth12;
      arrayData.push({
        id: key,
        name: name,
        email: email,
        address: address,
        phone: phone,
        day: day,
        month: month,
        year: year,
        taxYear: taxYear,
        bhxh: bhxh,
        dependent: dependent,
        valueMonth1: valueMonth1,
        valueMonth2: valueMonth2,
        valueMonth3: valueMonth3,
        valueMonth4: valueMonth4,
        valueMonth5: valueMonth5,
        valueMonth6: valueMonth6,
        valueMonth7: valueMonth7,
        valueMonth8: valueMonth8,
        valueMonth9: valueMonth9,
        valueMonth10: valueMonth10,
        valueMonth11: valueMonth11,
        valueMonth12: valueMonth12,
      });
    });
  });
  return arrayData;
};

const oneMonthTax = (data, income) => {
  if (data.taxYear >= 2021) {
    let result =
      income -
      11 -
      data.dependent * 4.4 -
      (data.bhxh === 'true' ? income * 0.08 : 0);
    if (result <= 0) {
      return 0;
    } else if (result <= 5) result = result * 0.05;
    else if (result <= 10) result = result * 0.1 - 0.25;
    else if (result <= 18) result = result * 0.15 - 0.75;
    else if (result <= 32) result = result * 0.2 - 1.65;
    else if (result <= 52) result = result * 0.25 - 3.25;
    else if (result <= 80) result = result * 0.3 - 5.85;
    else result = result * 0.35 - 9.85;
    return result;
  } else {
    let result =
      income -
      9 -
      data.dependent * 4.4 -
      (data.bhxh === 'true' ? income * 0.08 : 0);
    if (result <= 0) {
      return 0;
    } else if (result <= 5) result = result * 0.05;
    else if (result <= 10) result = result * 0.1 - 0.25;
    else if (result <= 18) result = result * 0.15 - 0.75;
    else if (result <= 32) result = result * 0.2 - 1.65;
    else if (result <= 52) result = result * 0.25 - 3.25;
    else if (result <= 80) result = result * 0.3 - 5.85;
    else result = result * 0.35 - 9.85;
    return result;
  }
};
const realTax = data => {
  if (parseInt(data.taxYear) >= 2021) {
    let result =
      data.valueMonth1 +
      data.valueMonth2 +
      data.valueMonth3 +
      data.valueMonth4 +
      data.valueMonth5 +
      data.valueMonth6 +
      data.valueMonth7 +
      data.valueMonth8 +
      data.valueMonth9 +
      data.valueMonth10 +
      data.valueMonth11 +
      data.valueMonth12;

    result =
      result -
      (data.bhxh === 'true' ? result * 0.08 : 0) -
      data.dependent * 4.4 * 12 -
      132;
    if (result <= 0) return 0;
    else if (result <= 60) return result * 0.05;
    else if (result <= 120) return result * 0.1 - 3;
    else if (result <= 216) return result * 0.15 - 9;
    else if (result <= 384) return result * 0.2 - 23.4;
    else if (result <= 624) return result * 0.25 - 57;
    else if (result <= 960) return result * 0.3 - 117;
    else return result * 0.35 - 217.8;
  } else {
    let result =
      parseInt(data.valueMonth1) +
      data.valueMonth2 +
      data.valueMonth3 +
      data.valueMonth4 +
      data.valueMonth5 +
      data.valueMonth6 +
      data.valueMonth7 +
      data.valueMonth8 +
      data.valueMonth9 +
      data.valueMonth10 +
      data.valueMonth11 +
      data.valueMonth12;

    result =
      result -
      (data.bhxh === 'true' ? result * 0.08 : 0) -
      data.dependent * 4.4 * 12 -
      108;

    if (result <= 0) return 0;
    else if (result <= 60) return result * 0.05;
    else if (result <= 120) return result * 0.1 - 3;
    else if (result <= 216) return result * 0.15 - 9;
    else if (result <= 384) return result * 0.2 - 23.4;
    else if (result <= 624) return result * 0.25 - 57;
    else if (result <= 960) return result * 0.3 - 117;
    else return result * 0.35 - 217.8;
  }
};

const tempTax = data => {
  const result =
    oneMonthTax(data, data.valueMonth1) +
    oneMonthTax(data, data.valueMonth2) +
    oneMonthTax(data, data.valueMonth3) +
    oneMonthTax(data, data.valueMonth4) +
    oneMonthTax(data, data.valueMonth5) +
    oneMonthTax(data, data.valueMonth6) +
    oneMonthTax(data, data.valueMonth7) +
    oneMonthTax(data, data.valueMonth8) +
    oneMonthTax(data, data.valueMonth9) +
    oneMonthTax(data, data.valueMonth10) +
    oneMonthTax(data, data.valueMonth11) +
    oneMonthTax(data, data.valueMonth12);
  return result.toFixed(2);
};

const SearchField = () => {
  const initialData = getData();
  console.log(initialData);
  const [data, setData] = useState(initialData[0]);
  const [open, setOpen] = useState(false);
  const [searchPhone, setSearchPhone] = useState('');
  const handleClick = () => {
    const newData = initialData.find(item => item.phone === searchPhone);
    setData(newData);
    setOpen(true);
  };

  return (
    <Box bg="gray.200" minH="100vh" p={20}>
      <Box>
        <FormLabel ml={8}> Nhập số điện thoại để tìm </FormLabel>
        <InputGroup size="md" w={60} mb={12}>
          <Input
            bg="white"
            pr="4.5rem"
            type="tel"
            placeholder="Phone number"
            onChange={e => setSearchPhone(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
        {open && (
          <Box>
            <Box mx="auto">
              <Flex mb={20}>
                <Box>
                  <Text mb={4}>Họ và Tên:</Text>
                  <Text mb={4}>Ngày tháng năm sinh:</Text>
                  <Text mb={4}>Số điện thoại:</Text>
                  <Text mb={4}>Email:</Text>
                  <Text mb={4}>Địa chỉ: </Text>
                </Box>
                <Box ml={12}>
                  <Text mb={4}>{data.name}</Text>
                  <Text mb={4}>
                    {data.day}/{data.month}/{data.year}
                  </Text>
                  <Text mb={4}>{data.phone}</Text>
                  <Text mb={4}>{data.email}</Text>
                  <Text mb={4}>{data.address}</Text>
                </Box>
              </Flex>
              <Table
                variant="simple"
                w="70%"
                bg="white"
                borderRadius="0.25rem"
                mx="auto"
                boxShadow="2xl"
              >
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
                    <Td isNumeric>
                      {oneMonthTax(data, data.valueMonth1).toFixed(2)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tháng 2</Td>
                    <Td isNumeric>{data.valueMonth2}</Td>
                    <Td isNumeric>
                      {oneMonthTax(data, data.valueMonth2).toFixed(2)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tháng 3</Td>
                    <Td isNumeric>{data.valueMonth3}</Td>
                    <Td isNumeric>
                      {oneMonthTax(data, data.valueMonth3).toFixed(2)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tháng 4</Td>
                    <Td isNumeric>{data.valueMonth4}</Td>
                    <Td isNumeric>
                      {oneMonthTax(data, data.valueMonth4).toFixed(2)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tháng 5</Td>
                    <Td isNumeric>{data.valueMonth5}</Td>
                    <Td isNumeric>
                      {oneMonthTax(data, data.valueMonth5).toFixed(2)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tháng 6</Td>
                    <Td isNumeric>{data.valueMonth6}</Td>
                    <Td isNumeric>
                      {oneMonthTax(data, data.valueMonth6).toFixed(2)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tháng 7</Td>
                    <Td isNumeric>{data.valueMonth7}</Td>
                    <Td isNumeric>
                      {oneMonthTax(data, data.valueMonth7).toFixed(2)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tháng 8</Td>
                    <Td isNumeric>{data.valueMonth8}</Td>
                    <Td isNumeric>
                      {oneMonthTax(data, data.valueMonth8).toFixed(2)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tháng 9</Td>
                    <Td isNumeric>{data.valueMonth9}</Td>
                    <Td isNumeric>
                      {oneMonthTax(data, data.valueMonth9).toFixed(2)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tháng 10</Td>
                    <Td isNumeric>{data.valueMonth10}</Td>
                    <Td isNumeric>
                      {oneMonthTax(data, data.valueMonth10).toFixed(2)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tháng 11</Td>
                    <Td isNumeric>{data.valueMonth11}</Td>
                    <Td isNumeric>
                      {oneMonthTax(data, data.valueMonth11).toFixed(2)}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tháng 12</Td>
                    <Td isNumeric>{data.valueMonth12}</Td>
                    <Td isNumeric>
                      {oneMonthTax(data, data.valueMonth12).toFixed(2)}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <Box w="70%" mx="auto" textAlign="right" my={8} fontSize="xl">
                <Text>
                  Tổng thuế TNCN đã tạm nộp:{' '}
                  <Text as="span" color="red">
                    {tempTax(data)}
                  </Text>{' '}
                  triệu VND
                </Text>
                <Text>
                  Tổng thuế TNCN thực tế:{' '}
                  <Text as="span" color="red">
                    {realTax(data).toFixed(2)}
                  </Text>{' '}
                  triệu VND
                </Text>
                <Text>
                  {realTax(data) < tempTax(data) ? `Nhận lại: ` : `Nộp thêm: `}{' '}
                  <Text as="span" color="red">
                    {realTax(data) < tempTax(data)
                      ? (tempTax(data) - realTax(data)).toFixed(2)
                      : (realTax(data) - tempTax(data)).toFixed(2)}
                  </Text>
                  triệu VND
                </Text>
              </Box>
            </Box>
            <Box textAlign="center">
              <Link to="/">
                <Button
                  //onClick={getData()}
                  bg="white"
                  _hover={{ background: 'blue.500', color: 'white' }}
                >
                  Về Trang Input
                </Button>
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchField;
