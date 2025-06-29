import { Box, Button, Card, Circle, Flex, Heading, HStack, IconButton, Image, Spacer, Text, VStack } from "@chakra-ui/react"
import { rupiahFormatter } from "@/utils/number-formatter";
import { bestSellerProducts } from "@/constants/homepage-constants";
import { useIsMobile } from "@/hooks/use-mobile";
import ShopIcon from '@/assets/icons/shop.png'

function BestSeller() {
    const isMobile = useIsMobile();

    return (
        <VStack px={'1rem'}>
            <Heading color='black' fontSize={{ base: '2xl', lg: '3xl' }} textAlign={{lg:'start', base: 'center'}}>
                Produk Terlaris Minggu Ini
            </Heading>
            <Text color='black' variant={{ base: 'reg.normal.medium', lg: 'lg.normal.medium' }} mt={{ lg: 3 }} textAlign={{ base: 'center', lg: 'start' }}>
                Yang Lagi Ramai Dicari Orang - Buruan cek sebelum kehabisan!
            </Text>

            <Flex w='full' p='3rem' gap='2rem' flexDir={{ base: 'column-reverse', lg: 'row' }}>
                <Flex w='full' gap={{ lg: '2rem', base: '1rem' }} overflow='auto' className="scrollbar-hide">
                    {
                        bestSellerProducts.slice(0, 3).map((productItem, i) => (
                            <Card.Root maxW="xs" overflow="hidden" flexShrink='0' key={i} aspectRatio={235 / 370} w={{ base: '10rem', md: '12rem', lg: 'auto' }} alignItems='center' >
                                <Image
                                    src={productItem.image}
                                    alt="Green double couch with wooden legs"
                                    aspectRatio={235 / 225}
                                    h='50%'
                                    w='full'
                                />
                                <Card.Body gap={{ lg: "2", base: '5px' }} p={{ base: '0.7rem', lg: '1rem' }}>
                                    <Card.Title >
                                        <Text variant={{ md: 'reg.normal.bold', lg: 'lg.normal.bold', base: 'sm.normal.bold' }}>
                                            {productItem.productName}
                                        </Text>
                                    </Card.Title>
                                    <Text textStyle={{ lg: "2xl", base: 'sm' }} fontWeight="medium" letterSpacing="tight" color="black">
                                        {rupiahFormatter.format(productItem.price)}
                                    </Text>
                                    <Spacer />
                                    {isMobile ?
                                        <IconButton variant='outline' size='xs'>
                                            <Image src={ShopIcon} />
                                        </IconButton> :
                                        <Button variant="outline" borderRadius='2xl' border={'2px solid black'} fontSize={{ base: 'sm' }} w='80%' p={'0.7rem'} h='min-content'>
                                            {

                                                <Text variant={{ base: 'tn.none.reg', lg: "sm.none.reg" }} >
                                                    Masukkan ke Keranjang
                                                </Text>
                                            }
                                        </Button>
                                    }
                                </Card.Body>
                            </Card.Root>
                        ))
                    }
                </Flex>
                <Flex alignItems='end' bgImage="url('/batik-1.jpg')" bgRepeat='no-repeat' bgSize='cover' position='relative' p={{ lg: '3rem', base: '1.5rem' }} flexGrow='1' minH={{ base: '20rem' }} aspectRatio={'500/370'} w={{ base: 'full', lg: '70%' }} bgPos='center'>
                    <Box bgGradient='to-t' gradientFrom="black, 70%" gradientTo="transparent" position='absolute' top={0} left={0} right={0} bottom={0} opacity={2 / 3} zIndex={1} />

                    <VStack alignItems={{ base: 'center', lg: 'flex-start' }} spaceY={{ lg: '1rem', base: '3px' }} zIndex={2}>
                        <Heading size={{ lg: "lg", base: 'md' }} color='white'>
                            Ukuran
                        </Heading>

                        <HStack spaceX={{ lg: '1rem' }} flexWrap='wrap' justifyContent={{ base: 'center', lg: 'flex-start' }}>
                            <Button variant={'outline'} fontSize={{ lg: '1rem', base: '0.8rem' }} rounded='full' color='white'
                                _hover={{
                                    color: 'black'
                                }}>
                                S
                            </Button>
                            <Button variant={'outline'} fontSize={{ lg: '1rem', base: '0.8rem' }} rounded='full' color='white' _hover={{
                                color: 'black'
                            }}>
                                M
                            </Button>
                            <Button variant={'outline'} fontSize={{ lg: '1rem', base: '0.8rem' }} rounded='full' color='white' _hover={{
                                color: 'black'
                            }}>
                                L
                            </Button>
                            <Button variant={'outline'} fontSize={{ lg: '1rem', base: '0.8rem' }} rounded='full' color='white' _hover={{
                                color: 'black'
                            }}>
                                XL
                            </Button>
                            <Button variant={'outline'} fontSize={{ lg: '1rem', base: '0.8rem' }} rounded='full' color='white' _hover={{
                                color: 'black'
                            }}>
                                XXL
                            </Button>
                        </HStack>
                    </VStack>
                </Flex>
            </Flex>

            {
                !isMobile &&
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
            }
        </VStack >
    )
}

export default BestSeller