import { Box, Button, Card, Flex, Heading, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react"
import { rupiahFormatter } from "@/utils/number-formatter";
import { bestSellerProducts } from "@/constants/homepage-constants";

function BestSeller() {
    return (
        <VStack >
            <Heading color='black' fontSize='3xl'>
                Produk Terlaris Minggu Ini
            </Heading>
            <Text color='black' variant='lg.none.medium' mt={3}>
                Yang Lagi Ramai Dicari Orang - Buruan cek sebelum kehabisan!
            </Text>

            <Flex w='full' p='3rem' gap='2rem'>
                {
                    bestSellerProducts.slice(0, 3).map(productItem => (
                        <Card.Root maxW="xs" overflow="hidden" flexShrink='0'>
                            <Image
                                src={productItem.image}
                                alt="Green double couch with wooden legs"
                            />
                            <Card.Body gap="2">
                                <Card.Title>{productItem.productName}</Card.Title>
                                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" color="black">
                                    {rupiahFormatter.format(productItem.price)}
                                </Text>
                            </Card.Body>
                            <Card.Footer gap="2">
                                <Button variant="outline" borderRadius='2xl' border={'2px solid black'}>Masukkan ke Keranjang</Button>
                            </Card.Footer>
                        </Card.Root>
                    ))
                }

                <Flex alignItems='end' bgImage="url('/batik-1.jpg')" bgRepeat='no-repeat' bgSize='cover' position='relative' p='3rem' flexGrow='1'>
                    <Box bgGradient='to-t' gradientFrom="black, 70%" gradientTo="transparent" position='absolute' top={0} left={0} right={0} bottom={0} opacity={2 / 3} zIndex={1} />

                    <VStack alignItems='flex-start' spaceY='1rem' zIndex={2}>
                        <Heading size="lg">
                            Ukuran
                        </Heading>

                        <HStack spaceX='1rem'>
                            <Button variant={'outline'} fontSize='1rem' rounded='full' color='white' 
                            _hover={{
                                color: 'black'
                            }}>
                                S
                            </Button>
                            <Button variant={'outline'} fontSize='1rem' rounded='full' color='white' _hover={{
                                color: 'black'
                            }}>
                                M
                            </Button>
                            <Button variant={'outline'} fontSize='1rem' rounded='full' color='white' _hover={{
                                color: 'black'
                            }}>
                                L
                            </Button>
                            <Button variant={'outline'} fontSize='1rem' rounded='full' color='white' _hover={{
                                color: 'black'
                            }}>
                                XL
                            </Button>
                            <Button variant={'outline'} fontSize='1rem' rounded='full' color='white' _hover={{
                                color: 'black'
                            }}>
                                XXL
                            </Button>
                        </HStack>
                    </VStack>
                </Flex>
            </Flex>
            <Flex w='full' p='3rem' gap='2rem'>
                {
                    bestSellerProducts.slice(3).map(productItem => (
                        <Card.Root maxW="xs" overflow="hidden" flexShrink='0'>
                            <Image
                                src={productItem.image}
                                alt="Green double couch with wooden legs"
                            />
                            <Card.Body gap="2">
                                <Card.Title>{productItem.productName}</Card.Title>
                                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" color="black">
                                    {rupiahFormatter.format(productItem.price)}
                                </Text>
                            </Card.Body>
                            <Card.Footer gap="2">
                                <Button variant="outline" borderRadius='2xl' border={'2px solid black'}>Masukkan ke Keranjang</Button>
                            </Card.Footer>
                        </Card.Root>
                    ))
                }
            </Flex>
        </VStack>
    )
}

export default BestSeller