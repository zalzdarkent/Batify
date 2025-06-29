import { testimonials } from "@/constants/homepage-constants";
import { Center, Group, Heading, Text, VStack, Button, Card, Image, HStack, Flex } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa";

function Testimoni() {
    return (
        <VStack spaceY='2rem' py="3rem" px="2rem">
            <Center bgColor='secondary.500' py='1rem' px="2rem">
                <Text variant={'reg.none.medium'} color='black'>
                    Testimoni
                </Text>
            </Center>

            <Heading size='xl' color={'black'}>
                Apa kata mereka yang udah beli?
            </Heading>

            <Flex gap={'2rem'} wrap="wrap" justifyContent='center'> 
                {
                    testimonials.map((t, i) => (
                        <Card.Root maxW="sm" overflow="hidden" bgColor='secondary.500' key={i}>
                            <Card.Body gap="3.5">
                                <HStack>
                                    {
                                        Array.from({
                                            length: t.stars
                                        }, () => (
                                            <Card.Title>
                                                <FaStar />
                                            </Card.Title>
                                        ))
                                    }
                                </HStack>
                                <Card.Description fontSize='lg'>
                                    {t.caption}
                                </Card.Description>

                            </Card.Body>
                            <Card.Footer >
                                <Text color="black" fontWeight="medium" letterSpacing="tight" mt="2">
                                    {`- ${t.name}, ${t.origin}`}
                                </Text>
                            </Card.Footer>
                        </Card.Root>
                    ))
                }
            </Flex>
        </VStack>
    )
}

export default Testimoni
