import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import InputField from './inputPage/InputField';
import OutputField from './outputPage/OutputField';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './home/Home';
import SearchFieldPlus from './outputPage/SearchFieldPlus';
import ErrorPage from './errorPage/ErrorPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route  path="/input" component={InputField} />
          <Route  path="/output/:id" component={OutputField} />
          <Route  path="/search" component={SearchFieldPlus} />
          <Route  path="/*" > <ErrorPage/></Route>
          <Route  path="/output/*" > <ErrorPage/></Route>

        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
