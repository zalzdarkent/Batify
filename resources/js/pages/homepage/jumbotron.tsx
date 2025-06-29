import { Box, Button, Flex, Heading, HStack, IconButton, Text, VStack } from "@chakra-ui/react"

function Jumbotron() {
    return (
        <Flex
            alignItems={{ base: 'center', lg: 'end' }}
            justifyContent={{ base: 'center', lg: 'start' }}
            minH='calc(100vh - 7rem)'
            p={{ lg: '7rem', base: '2rem' }}
            bgImage="url('/jumbotron-bg.png')"
            bgRepeat='no-repeat'
            bgSize='cover'
            bgPos={'center'}
            position='relative' >
            <Box bgGradient='to-t' gradientFrom="black, 70%" gradientTo="transparent" position='absolute' top={0} left={0} right={0} bottom={0} opacity={2 / 3} zIndex={1} />

            <VStack w={'70vw'} alignItems='flex-start' spaceY={{ base: '0.3rem', md: '0.5rem', lg: '1rem' }} zIndex={2}>
                <Heading size={{ lg: "xl", base: 'lg' }} color='white'>
                    Batik Itu Gak Harus Formal.
                </Heading>
                <Text variant={{ base: 'reg.normal.reg', lg: 'lg.normal.reg' }} color='white'>
                    Sekarang kamu bisa tampil stylish pakai batik, tanpa kelihatan "tua". <br />
                    Yuk mulai koleksi batik khas dari berbagai daerah Indonesia—langsung dari pengrajinnya.
                </Text>

                <HStack spaceX='1rem' wrap='wrap'>
                    <Button variant={'surface'} fontSize={{ base: '0.8rem', md: '0.9rem', lg: '1rem' }}>
                        Lihat Katalog
                    </Button>
                    <IconButton variant={'flat'} color='white' fontSize={{ base: '0.8rem', md: '0.9rem', lg: '1rem' }}>
                        Pelajari Motif Batik
                    </IconButton>
                </HStack>
            </VStack>
        </Flex >
    )
}

export default Jumbotron