import { Box, VStack, HStack, Text, IconButton, Input, useToast } from '@chakra-ui/react';
import { FaTrash, FaPen, FaSave } from 'react-icons/fa';
import { useState } from 'react';

const NoteApp = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: 'First note' },
    { id: 2, content: 'Second note' }
  ]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const toast = useToast();

  const handleEdit = (note) => {
    setEditId(note.id);
    setEditText(note.content);
  };

  const handleSave = (id) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return { ...note, content: editText };
      }
      return note;
    });
    setNotes(updatedNotes);
    setEditId(null);
    toast({
      title: 'Note updated.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const handleDelete = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    toast({
      title: 'Note deleted.',
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="stretch">
      {notes.map(note => (
        <HStack key={note.id}>
          {editId === note.id ? (
            <Input value={editText} onChange={(e) => setEditText(e.target.value)} />
          ) : (
            <Text>{note.content}</Text>
          )}
          {editId === note.id ? (
            <IconButton icon={<FaSave />} onClick={() => handleSave(note.id)} />
          ) : (
            <IconButton icon={<FaPen />} onClick={() => handleEdit(note)} />
          )}
          <IconButton icon={<FaTrash />} onClick={() => handleDelete(note.id)} />
        </HStack>
      ))}
    </VStack>
  );
};

export default NoteApp;