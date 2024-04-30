import { Box, Heading } from '@chakra-ui/react';
import NoteApp from './NoteApp';

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Note Taking App</Heading>
      <NoteApp />
    </Box>
  );
};

export default Index;