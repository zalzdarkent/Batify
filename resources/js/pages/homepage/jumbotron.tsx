import { Box, Button, Flex, Heading, HStack, IconButton, Text, VStack } from "@chakra-ui/react"

function Jumbotron() {
    return (
        <Flex alignItems='end' minH='80vh' p='7rem' bgImage="url('/jumbotron-bg.png')" bgRepeat='no-repeat' bgSize='cover' position='relative'>
            <Box bgGradient='to-t' gradientFrom="black, 70%" gradientTo="transparent" position='absolute' top={0} left={0} right={0} bottom={0} opacity={2 / 3} zIndex={1} />

            <VStack w={'70vw'} alignItems='flex-start' spaceY='1rem' zIndex={2}>
                <Heading size="xl">
                    Batik Itu Gak Harus Formal.
                </Heading>
                <Text variant={'lg.normal.reg'}>
                    Sekarang kamu bisa tampil stylish pakai batik, tanpa kelihatan "tua". <br />
                    Yuk mulai koleksi batik khas dari berbagai daerah Indonesia—langsung dari pengrajinnya.
                </Text>

                <HStack spaceX='1rem'>
                    <Button variant={'surface'} fontSize='1rem'>
                        Lihat Katalog
                    </Button>
                    <IconButton variant={'flat'} color='white' fontSize='1rem'>
                        Pelajari Motif Batik
                    </IconButton>
                </HStack>
            </VStack>
        </Flex>
    )
}

export default Jumbotron