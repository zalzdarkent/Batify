import { featuresProducts } from "@/constants/homepage-constants";
import { Box, Flex, Heading, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react"
// @ts-ignore
import { FaArrowRight } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";


function FeaturesProducts() {
    return (
        <VStack alignItems='flex-start' p='3rem' spaceY='2rem'>
            <HStack>
                <Box bgColor='black' h='2.5rem' w='0.3rem' borderRadius='1rem' />

                <Heading color='black'>Kategori Produk Unggulan</Heading>
            </HStack>

            <Flex w='full' gap='3rem' flexWrap='wrap'>
                <Flex  gap='3rem' flexGrow={1} flexWrap='wrap' >
                    {featuresProducts.map(product => (
                        <Flex px='1rem' py='1rem' flexGrow='1' aspectRatio={235 / 325} h={{lg: 'auto', base: '325px'}} maxH='24rem' position='relative' alignItems='end' minW={235} maxW='20rem' overflow='hidden' borderRadius='1rem'>
                            <Image src={product.image} position='absolute' aspectRatio={235 / 325} scale={{lg: 120/100}} left={0} top={0}  />
                            <IconButton bgColor='secondary.500' borderRadius='2xl' gap={0} px='0.5rem' size={'sm'} maxW='20rem'>
                                <Text color='black' px='1rem' py='0.5rem' variant='reg.none.reg'>
                                    {product.name}
                                </Text>
                                <FaArrowRight color="black" />
                            </IconButton>
                        </Flex>
                    ))}
                </Flex>
                <VStack alignItems='flex-start' flexShrink={0} flexBasis='20rem' justifyContent="center">
                    <Heading color='black'>
                        Lihat Semua <br /> Kategori
                    </Heading>
                    <IconButton variant='outline' px='1rem' borderRadius='0.5rem'>
                        <Text variant={'reg.none.medium'} color='black' >
                            Katalog
                        </Text>
                        <MdArrowForwardIos />
                    </IconButton>
                </VStack>
            </Flex>
        </VStack>
    )
}

export default FeaturesProducts