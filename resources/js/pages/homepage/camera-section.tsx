import { Box, Flex, Heading, IconButton, Image, Text, VStack } from "@chakra-ui/react"
import { CiLocationOn } from "react-icons/ci";

function CameraSection() {
    return (
        <Flex flexDir={{ base: 'column', md: 'row' }} justifyContent='space-between' gap={{ lg: '10vw', base: '5vw' }} px={{ base: '3rem', lg: '7rem' }} py={{ lg: '5rem', base: '2rem' }} alignItems='center'>
            <Box aspectRatio={600 / 500} w={{ lg: '80%', base: '100%' }} minW={{ base: 'unset', lg: '410px' }} position='relative' >
                <Image src={'/camera-booth.png'} aspectRatio={600 / 500} w='full' zIndex={1} borderBottomRightRadius='3rem' borderTopLeftRadius='3rem' />
                <Box bgColor='primary.500' position='absolute' zIndex={100} top={{ lg: 5, }} bottom={{ lg: 'unset', base: -5 }} left={{ lg: '50%' }} right={{ lg: 'unset', base: -7 }} w='max-content' borderTopRightRadius='1.5rem' borderBottomLeftRadius='1.5rem' p='1rem'>
                    <Heading color='white' size={{ lg: 'md', base: 'xs', md: 'sm' }}>
                        Scan Jenis Batik di Booth Kami
                    </Heading>
                </Box>
            </Box>

            <VStack alignItems={{ md: 'start', base: 'center' }} justifyContent={{ lg: 'center', base: 'start' }} spaceY='1rem' w='full'>
                <Text color={'black'} fontSize={{ lg: '20px', base: '16px' }}
                    lineHeight={'32px'}
                    fontWeight={'500'}
                    textAlign={{ md: 'left', base: 'center' }}
                    mt={{ lg: '5rem' }}
                >
                    Kamera bisa langsung kenalin jenis batik kamu secara otomatis. Gak perlu tanya-tanya, tinggal bayar pakai QRIS & bawa pulang.
                </Text>
                <IconButton variant='outline' borderRadius='lg' p={{ lg: '1.3rem', base: '0.8rem' }} border='1.5px solid black' size={{ lg: '2xl', base: 'lg' }}>
                    <CiLocationOn />
                    <Text color='black' variant={{ base: 'sm.none.medium', lg: 'reg.none.medium' }}>Lihat Lokasi Booth</Text>
                </IconButton>
            </VStack>
        </Flex >
    )
}

export default CameraSection
