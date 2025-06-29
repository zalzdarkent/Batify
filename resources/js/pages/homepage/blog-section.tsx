import { Box, Circle, Flex, Group, Heading, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react"
import { IoIosArrowForward } from "react-icons/io";

function BlogSection() {
    return (
        <HStack className="" px='16rem' py='5rem' spaceX='7rem' >
            <Flex w={'50%'} position={'relative'} aspectRatio={1 / 1}>
                <Box aspectRatio={250 / 375} position='absolute' w='35%' right={'50%'} top={'30%'}>
                    <Image src={'/blog-pict-2.jpg'} borderBottomRightRadius='full' borderBottomLeftRadius='full' aspectRatio={250 / 375} w={'full'} zIndex={20} position='relative' />
                    <Circle w={'10rem'} aspectRatio={'square'} bgColor='secondary.500' position='absolute' left={-16} bottom={-10} zIndex={1} />
                    <Circle w={'7rem'} aspectRatio={'square'} bgColor='secondary.500' position='absolute' right={-16} bottom={10} zIndex={1} />
                </Box>
                <Box aspectRatio={250 / 375} position='absolute' w='35%' left={'50%'} bottom={'30%'}>
                    <Image src={'/blog-pict-1.jpg'} borderTopRightRadius='full' borderTopLeftRadius='full' w={'full'} aspectRatio={250 / 375} zIndex={2} position='relative' />
                    <Circle w={'7rem'} aspectRatio={'square'} bgColor='secondary.500' position='absolute' left={-16} top={10} zIndex={1} />
                    <Circle w={'10rem'} aspectRatio={'square'} bgColor='secondary.500' position='absolute' right={-16} top={-10} zIndex={1} />
                </Box>
            </Flex>

            <VStack alignItems='flex-start' spaceY='1rem'>
                <Heading size='lg' color="black">
                    Blog & Edukasi Budaya
                </Heading>
                <Text color={'black'} fontSize={'20px'}
                    lineHeight={'32px'}
                    fontWeight={'500'}
                >
                    Belajar Sekilas Soal Batik! <br />
                    Dari filosofi motif sampai cara nyuci batik biar awet, semua ada.
                </Text>
                <IconButton variant='outline' borderRadius='lg' p='1.3rem' border='1.5px solid black' size='2xl'>
                    <Text color='black' variant='reg.none.medium'>Baca Artikel</Text>
                    <IoIosArrowForward />
                </IconButton>
            </VStack>
        </HStack >
    )
}

export default BlogSection
