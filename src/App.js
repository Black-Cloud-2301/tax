import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import InputField from './inputPage/InputField';
import OutputField from './outputPage/OutputField';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './home/Home';
import SearchFieldPlus from './outputPage/SearchFieldPlus';
import ErrorPage from './errorPage/ErrorPage';
import EmployeeManage from './employeeManage/EmployeeManage';
import Department from './department/Department';
import InputTax from './inputPage/InputTax';
import Setting from './handleTaxTNCN/Setting';
import Report from './report/Report';
import ReportDepartment from './report/ReportDepartment';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route  path="/manager/:name/input" component={InputField} />
          <Route  path="/manager/:id/inputtax" component={InputTax} />
          <Route path="/manager/:name" component={EmployeeManage}></Route>
          <Route  path="/output/:id" component={OutputField} />
          <Route  path="/search" component={SearchFieldPlus} />
          <Route path="/report/:name" component={ReportDepartment}/>
          <Route path="/report" component={Report}/>
          <Route  path="/setting" component={Setting} />
          <Route path="/department"  ><Department/></Route>
          <Route  path="/*" > <ErrorPage/></Route>
          <Route  path="/output/*" > <ErrorPage/></Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
