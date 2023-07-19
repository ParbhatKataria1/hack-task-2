import { useQuery } from "react-query";
import axios from "axios";
import {  Box, Grid, Input } from "@chakra-ui/react";
import CardItem from "./Card";
import { useState } from "react";
const url = 'https://youtube-server-vmap.onrender.com';
// const url = 'http://localhost:4500'
function Search() {
  const [search, setsearch] = useState('');
  const { isLoading, error, data } = useQuery(["data", search], (search) =>{
    const data = search.queryKey[1];
    return axios.get(`${url}/search?search=${data}`).then(res=>res.data)
  }
  
  );
  console.log(data)
  if (error) return "An error has occurred: " + error.message;
  return (
    <Box w={'90%'} margin={'auto'} >
      <Box my='20px'>
        <Input onChange={(e)=>{setsearch(e.target.value)}}  placeholder='Seach By title or description'></Input>
      </Box>
      {isLoading && <Box>Loading...</Box>}

      <Grid  templateColumns='repeat(3, 1fr)' gap={10}>
        {data?.length && data.map((el) => {
          return (
            <CardItem key={el._id}  data={el}/>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Search;
