import { useState } from "react";
import { Container, Text, VStack, Button, Input, IconButton, Image, useToast } from "@chakra-ui/react";
import { FaMicrophone, FaCamera } from "react-icons/fa";

const Index = () => {
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const toast = useToast();

  const handleImageRecognition = () => {
    // Placeholder for image recognition logic
    setDescription("This is a placeholder description of the identified object.");
    toast({
      title: "Image recognized.",
      description: "The object has been identified and described.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSpeechToText = () => {
    // Placeholder for speech-to-text logic
    setDescription("This is a placeholder text from speech.");
    toast({
      title: "Speech recognized.",
      description: "The speech has been converted to text.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">AI-Powered Accessibility Assistant</Text>
        <Text>Provide real-time accessibility assistance for individuals with disabilities.</Text>
        <Input placeholder="Enter image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <IconButton aria-label="Capture Image" icon={<FaCamera />} size="lg" onClick={handleImageRecognition} />
        {imageUrl && <Image src={imageUrl} alt="Uploaded Image" />}
        <Text>{description}</Text>
        <IconButton aria-label="Start Speech Recognition" icon={<FaMicrophone />} size="lg" onClick={handleSpeechToText} />
      </VStack>
    </Container>
  );
};

export default Index;
