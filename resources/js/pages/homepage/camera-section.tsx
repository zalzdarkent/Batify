import { Box, Heading, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react"
import { CiLocationOn } from "react-icons/ci";

function CameraSection() {
    return (
        <HStack className="" px='16rem' py='5rem' spaceX='7rem'>
            <Box aspectRatio={600 / 500} w='72rem' position='relative'>
                <Image src={'/camera-booth.png'} aspectRatio={600 / 500} w='full' zIndex={1} borderBottomRightRadius='3rem' borderTopLeftRadius='3rem' />
                <Box bgColor='primary.500' position='absolute' zIndex={100} top={10} left={'50%'} w='max-content' borderTopRightRadius='1.5rem' borderBottomLeftRadius='1.5rem' p='1rem'>
                    <Heading size='lg'>
                        Scan Jenis Batik di Booth Kami
                    </Heading>
                </Box>
            </Box>

            <VStack alignItems='flex-start' spaceY='1rem'>
                <Text color={'black'} fontSize={'20px'}
                    lineHeight={'32px'}
                    fontWeight={'500'}
                >
                    Kamera bisa langsung kenalin jenis batik kamu secara otomatis. Gak perlu tanya-tanya, tinggal bayar pakai QRIS & bawa pulang.
                </Text>
                <IconButton variant='outline' borderRadius='lg' p='1.3rem' border='1.5px solid black' size='2xl'>
                    <CiLocationOn />
                    <Text color='black' variant='reg.none.medium'>Lihat Lokasi Booth</Text>
                </IconButton>
            </VStack>
        </HStack >
    )
}

export default CameraSection
