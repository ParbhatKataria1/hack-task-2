import { useQuery } from "react-query";
import axios from "axios";
import {  Box, Button, Flex, Grid, Heading } from "@chakra-ui/react";
import CardItem from "./Card";
import { useState } from "react";

const url = 'https://youtube-server-vmap.onrender.com';

function Page() {
  const [page, setpage] = useState(1);
  const { isLoading, error, data } = useQuery(["data", page], (page) =>{
    const data = page.queryKey[1];
    return axios.get(`${url}?page=${data}&limit=10`).then(res=>res.data)
  }
  
  );
  if (error) return "An error has occurred: " + error.message;
  return (
    <Box w={'90%'} margin={'auto'} >
       <Heading>Paginated Data</Heading>
      {isLoading && <Box>Loading...</Box>}

      <Grid  templateColumns='repeat(3, 1fr)' gap={10}>
        {data?.length && data.map((el) => {
          return (
            <CardItem key={el._id}  data={el}/>
          );
        })}
      </Grid>
      <Flex display='flex' justifyContent={'center'} my='20px' >
        <Button  isDisabled={page==1?true:false} onClick={()=>{setpage(prev=>prev-1)}}>-</Button>
        <Button mx='10px' isDisabled={true}>{page}</Button>
        <Button isDisabled={data?.length?false:true} onClick={()=>{setpage(prev=>prev+1)}}>+</Button>
      </Flex>
    </Box>
  );
}

export default Page;
