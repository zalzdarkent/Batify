import MainLayout from "@/layouts/main-layout"
import { rupiahFormatter } from "@/utils/number-formatter"
import { Flex, VStack, Button, Field, Input, Select, Portal, Checkbox, createListCollection, HStack, Link, Grid, GridItem, Box, Image, Circle, Text, Group } from "@chakra-ui/react"

const frameworks = createListCollection({
    items: [
        { label: "Transfer Bank / Virtual Account", value: "va" },
        { label: "QRIS / E-wallet (GoPay, ShopeePay, dll.)", value: "qris" },
        { label: "Kartu Kredit / Debit", value: "debit" },
    ],
})

function Checkout() {
    return (
        <MainLayout title='Pembayaran'>
            <Flex flexDir={{
                base: 'column',
                lg: 'row'
            }}
                h='calc(100vh - 7rem)'
            >
                <VStack css={{
                    '&>*': {
                        w: 'full'
                    }
                }}
                    w={{
                        base: 'dvw',
                        lg: '50vw'
                    }}
                    spaceY='1rem'
                    p='3rem'
                >
                    <Field.Root >
                        <Field.Label>First name</Field.Label>
                        <Input />
                    </Field.Root>

                    <Field.Root >
                        <Field.Label>Last name</Field.Label>
                        <Input />
                    </Field.Root>

                    <Checkbox.Root >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control borderColor="gray.400" borderRadius='5px' />
                        <Checkbox.Label>Gunakan Totebag</Checkbox.Label>
                    </Checkbox.Root>

                    <Select.Root collection={frameworks} size="md">
                        <Select.HiddenSelect />
                        <Select.Label>Metode Pembayaran</Select.Label>
                        <Select.Control>
                            <Select.Trigger>
                                <Select.ValueText placeholder="Pilih Metode Pembayaran" />
                            </Select.Trigger>
                            <Select.IndicatorGroup>
                                <Select.Indicator />
                            </Select.IndicatorGroup>
                        </Select.Control>
                        <Portal>
                            <Select.Positioner>
                                <Select.Content>
                                    {frameworks.items.map((framework) => (
                                        <Select.Item item={framework} key={framework.value}>
                                            {framework.label}
                                            <Select.ItemIndicator />
                                        </Select.Item>
                                    ))}
                                </Select.Content>
                            </Select.Positioner>
                        </Portal>
                    </Select.Root>

                    <Button >
                        Bayar Sekarang
                    </Button>

                    <VStack pt='5rem'>
                        <hr style={{
                            height: '3px',
                            backgroundColor: '#808080',
                            width: '100%',
                            borderRadius: '3px',
                            marginBottom: '3rem'
                        }} />

                        <HStack spaceX='1rem'>
                            <Link href="#" variant="underline" colorPalette="blue" fontSize='1rem'
                            >
                                Kebijakan Pengembalian Dana
                            </Link>
                            <Link href="#" variant="underline" colorPalette="blue" fontSize='1rem'>
                                Kebijakan Privasi
                            </Link>
                            <Link href="#" variant="underline" colorPalette="blue" fontSize='1rem'>
                                Ketentuan Layanan
                            </Link>
                        </HStack>
                    </VStack>
                </VStack>
                <VStack css={{
                    '&>*': {
                        w: 'full'
                    }
                }}
                    w={{
                        base: 'dvw',
                        lg: '50vw'
                    }}
                    spaceY='1rem'
                    bgColor='gray.300'
                    p='3rem'
                    alignItems='start'
                >
                    <VStack >
                        <Grid templateColumns='repeat(8, 1fr)' templateRows='repeat(3, min-content)' alignItems='center' gapY='1rem'>
                            <GridItem colSpan={2}>
                                <Box position='relative' aspectRatio='square' w='70%'>
                                    <Image src="/detail-product.jpg" w='full' aspectRatio='square' borderRadius='lg' />
                                    <Circle bgColor='black' position='absolute' w='2rem' top={-2} right={-3} p='4px' aspectRatio='square'>
                                        <Text color='white'>
                                            1
                                        </Text>
                                    </Circle>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <VStack alignItems='flex-start'>
                                    <Text variant='reg.normal.reg'>
                                        Batify
                                    </Text>
                                    <Text variant='reg.normal.bold'>
                                        Batik Kombinasi Wanita -Blouse Navy Red
                                    </Text>
                                    <Text variant='reg.normal.reg'>
                                        M
                                    </Text>
                                </VStack>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Text variant='reg.normal.medium'>
                                    {rupiahFormatter.format(365000)}
                                </Text>
                            </GridItem>
                        </Grid>
                        <Grid templateColumns='repeat(8, 1fr)' templateRows='repeat(3, min-content)' alignItems='center' gapY='1rem'>
                            <GridItem colSpan={2}>
                                <Box position='relative' aspectRatio='square' w='70%'>
                                    <Image src="/detail-product.jpg" w='full' aspectRatio='square' borderRadius='lg' />
                                    <Circle bgColor='black' position='absolute' w='2rem' top={-2} right={-3} p='4px' aspectRatio='square'>
                                        <Text color='white'>
                                            1
                                        </Text>
                                    </Circle>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={4}>
                                <VStack alignItems='flex-start'>
                                    <Text variant='reg.normal.reg'>
                                        Batify
                                    </Text>
                                    <Text variant='reg.normal.bold'>
                                        Batik Kombinasi Wanita -Blouse Navy Red
                                    </Text>
                                    <Text variant='reg.normal.reg'>
                                        M
                                    </Text>
                                </VStack>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Text variant='reg.normal.medium'>
                                    {rupiahFormatter.format(365000)}
                                </Text>
                            </GridItem>
                        </Grid>
                    </VStack>

                    <Group w="full" >
                        <Input flex="1" placeholder="Kode Diskon" bgColor='white' />
                        <Button bg="bg.panel" borderColor="border.emphasized" variant="outline" color='gray.500'>
                            Terapkan
                        </Button>
                    </Group>

                    <Flex justifyContent='space-between'>
                        <Text>
                            Totebag
                        </Text>
                        <Text color={'gray.500'}>
                            {rupiahFormatter.format(8000)}
                        </Text>

                    </Flex>
                    <Flex justifyContent='space-between'>
                        <Text>
                            Jumlah Keseluruhan
                        </Text>
                        <Text >
                            {rupiahFormatter.format(365000)}
                        </Text>
                    </Flex>
                    <Flex justifyContent='space-between'>
                        <Text variant="lg.none.bold" >
                            Total
                        </Text>
                        <Text variant="lg.none.bold"  >
                            {rupiahFormatter.format(373000)}
                        </Text>
                    </Flex>
                </VStack>
            </Flex>
        </MainLayout>

    )
}

export default Checkout
