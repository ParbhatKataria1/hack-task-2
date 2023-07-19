import "./App.css";
import {  Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import Page from "./component/Page";
import Search from "./component/Search";
const url = 'https://youtube-server-vmap.onrender.com';
// const url = 'http://localhost:4500'
function App() {
  const [toggle, settoggle] = useState(<Page/>);
  
  return (
    <Box w={'90%'} margin={'auto'} className="App">
      <Box my='20px'>
        <Button  onClick={()=>settoggle(<Page/>)}>Paginated Data</Button>
        <Button onClick={()=>{settoggle(<Search/>)}}>Search Data</Button>
      </Box>
      {toggle}
    </Box>
  );
}

export default App;
