import "./App.css";
import { useQuery } from "react-query";
import axios from "axios";
import {  Box, Grid } from "@chakra-ui/react";
import CardItem from "./component/Card";

function App() {
  const { isLoading, error, data } = useQuery("data", () =>
    axios.get(`https://youtube-server-vmap.onrender.com`).then((res) => res.data)
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <Box className="App">
      <Grid w={'90%'} margin={'auto'} templateColumns='repeat(3, 1fr)' gap={10}>
        {data.length && data.map((el) => {
          return (
            <CardItem key={el._id}  data={el}/>
          );
        })}
      </Grid>
    </Box>
  );
}

export default App;
