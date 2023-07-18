import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "react-query";
import axios from "axios";
import { Box, Card, Divider, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import {  Image, CardBody, CardFooter } from "@chakra-ui/react";

function App() {
  const { isLoading, error, data } = useQuery("data", () =>
    axios.get(`http://localhost:4500`).then((res) => res.data)
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <Box className="App">
      <Grid w={'90%'} margin={'auto'} templateColumns='repeat(3, 1fr)' gap={10}>
        {data.length && data.map((el) => {
          const {thumbnails, title,description , publishedAt} = el;
          return (
            <GridItem key={el._id}>
            <Card maxW="sm">
              <CardBody>
              <Image
              m='auto'
                src={thumbnails}
                alt={title}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{title}</Heading>
                <Text>
                  {description}
                </Text>
                <Text color="blue.600" >
                {publishedAt}
                </Text>
              </Stack>
            </CardBody>
              <Divider />
            </Card>
          </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

export default App;
