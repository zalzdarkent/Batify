import MainLayout from "@/layouts/main-layout";
import { Box, Button, Center, Flex, Heading, Input, Text, VStack, } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";

function CartPage() {
    return (
        <MainLayout title='Keranjang'>
            <Center h='74vh' w='full'>
                <Flex flexDir='column' w={{ base: '90%', md: '50%' }} aspectRatio='square' gap='3rem' justifyContent='center'>
                    <VStack spaceY='0.5rem'>
                        <Heading color='black' size='lg' textAlign='center'>
                            Selamat Datang di Batify
                        </Heading>
                        <Text color='black' textAlign='center'>
                            Silakan masukkan ID Pengguna dari tiket masuk Anda
                        </Text>
                    </VStack>

                    <VStack spaceY='0.5rem'>
                        <Input placeholder="Ketik ID Pengguna disini ..." size="lg" />
                        <Button variant='filled' bgColor='primary.500' borderRadius='0.5rem' w='full'>
                            <Link href="/keranjang/1/1">
                                Masuk
                            </Link>
                        </Button>

                    </VStack>
                </Flex>
            </Center>
        </MainLayout>
    )
}

export default CartPage
