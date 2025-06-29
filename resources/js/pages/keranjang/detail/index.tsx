import MainLayout from "@/layouts/main-layout";
import DetailProductContent from "@/pages/catalog/detailProduct/content";
import { rupiahFormatter } from "@/utils/number-formatter";
import { Box, Button, Center, Flex, Grid, GridItem, Group, Heading, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Checkbox } from "@chakra-ui/react"
import { Link } from "@inertiajs/react";


function CartDetail() {
    return (
        <MainLayout title="Detail Keranjang">
            <Grid templateColumns='repeat(8, 1fr)' gap='6' minH='80vh'>
                <GridItem colSpan={5} p='3rem'>
                    <DetailProductContent />
                </GridItem>
                <GridItem colSpan={3} bgColor='gray.300' p='3rem' h='100vh' position='sticky' top={'10vh'}>
                    <Flex flexDir='column' justifyContent='space-between' h='80vh'>
                        <VStack spaceY='1rem' alignItems='flex-start'>

                            <Heading color='black'>
                                Keranjang Belanja
                            </Heading>

                            <Flex flexDir='column' gap='3rem' >
                                {Array.from({ length: 2 }, () => (
                                    <Grid templateColumns='repeat(7, 1fr)' templateRows='repeat(3, min-content)' alignItems={'center'} gapY='1rem'>
                                        <GridItem rowSpan={3}>
                                            <Center h='full'>
                                                <Flex borderColor='primary.500' border='2px solid' p='2px' borderRadius='5px' aspectRatio='square' width='1.2rem' justifyContent='center' alignItems='center'>
                                                    <Box bgColor='primary.500' borderRadius='5px' width={'full'} aspectRatio='square' />
                                                </Flex>
                                            </Center>
                                        </GridItem>
                                        <GridItem rowSpan={3} colSpan={2}>
                                            <Image src="/detail-product.jpg" aspectRatio='square' w='70%' borderRadius='1rem' />
                                        </GridItem>
                                        <GridItem colSpan={4}>
                                            <Flex justifyContent='space-between' alignItems='center'>
                                                <Heading size={'sm'} >
                                                    Batik Kombinasi Wanita - Blouse Navy Red
                                                </Heading>
                                                <Text>
                                                    {rupiahFormatter.format(365000)}
                                                </Text>
                                            </Flex>
                                        </GridItem>
                                        <GridItem colSpan={4}>
                                            <Text variant='sm.none.medium' color='gray.800'>
                                                M
                                            </Text>
                                        </GridItem>
                                        <GridItem colSpan={4}>
                                            <Flex justifyContent='space-between'>
                                                <Group attached border='1px solid' borderColor='gray.500' alignItems='center' justifyContent='space-between'>
                                                    <IconButton variant='outline' border='none' borderRight={'1px solid '} borderColor='gray.500' color='black' size='xs' borderRadius='none' _hover={{
                                                        bgColor: 'gray.300'
                                                    }} >
                                                        <FaMinus />
                                                    </IconButton>
                                                    <Text color='black' mx='1rem' variant='sm.none.reg'>
                                                        1
                                                    </Text>
                                                    <IconButton variant='outline' border='none' borderLeft={'1px solid '} borderColor='gray.500' color='black' size='xs' borderRadius='none' _hover={{
                                                        bgColor: 'gray.300'
                                                    }}>
                                                        <FaPlus />
                                                    </IconButton>
                                                </Group>
                                                <IconButton variant='flat'>
                                                    <Text variant='sm.none.reg'>
                                                        Lihat Produk Serupa
                                                    </Text>
                                                    <IoIosArrowForward />
                                                </IconButton>
                                            </Flex>
                                        </GridItem>
                                    </Grid>
                                ))}
                            </Flex>
                        </VStack>

                        <Flex alignItems='center' justifyContent='space-between'>
                            <HStack spaceX='1rem'>
                                <Checkbox.Root >
                                    <Checkbox.HiddenInput />
                                    <Checkbox.Control borderColor="gray.400" borderRadius='5px' />
                                    <Checkbox.Label>Pilih Semua</Checkbox.Label>
                                    <Text>
                                        (2)
                                    </Text>
                                </Checkbox.Root>

                                <Button variant='filled' bgColor='danger.500' _hover={{
                                    bgColor: 'danger.600'
                                }}>
                                    Hapus
                                </Button>
                            </HStack>

                            <HStack >
                                <Text>
                                    Total (1 produk):
                                </Text>
                                <Text variant='reg.none.bold'>
                                    {rupiahFormatter.format(365000)}
                                </Text>
                                <Link href='/keranjang/1/1/checkout'>

                                    <Button ml='1rem' _hover={{
                                        bgColor: 'primary.300'
                                    }}

                                    >
                                        Checkout
                                    </Button>
                                </Link>
                            </HStack>
                        </Flex>
                    </Flex>
                </GridItem>
            </Grid>
        </MainLayout >
    )
}

export default CartDetail
