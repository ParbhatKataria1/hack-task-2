import React from "react";
import {
  Box,
  Card,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Image, CardBody, CardFooter } from "@chakra-ui/react";

const CardItem = ({ data }) => {
  const { thumbnails, title, description, publishedAt } = data;

  return (
    <GridItem>
      <Card maxW="sm">
        <CardBody>
          <Image m="auto" src={thumbnails} alt={title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
            <Text color="blue.600">{publishedAt}</Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </GridItem>
  );
};

export default CardItem;
