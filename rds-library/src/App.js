//import logo from "./logo.svg";
import "./App.css"
import "@radix-ui/themes/styles.css"
import { Home } from './Pages/homepage'
import { Page1 } from './Pages/page1'

import { Flex, Text, Button } from "@radix-ui/themes";
import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';
import { Layout } from "./Layout";

function App() {
  return (
      <BrowserRouter>
        
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Home />} />
              <Route path="/new-page" element={<Page1 />} />
            </Route>
          </Routes>
          
      </BrowserRouter>
  );
}

export default App;
