import { cmFormatter, rupiahFormatter } from "@/utils/number-formatter";
import { Heading, HStack, IconButton, Image, Text, VStack, Group, Icon, Button, Flex, Box, Stack, Table, } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

const productSize = [
    {
        size: 'S-M',
        shoulderWidth: 37,
        chestCircumference: 94,
        waistCircumference: 90,
        frontSize: 67,
        backSize: 62,
        armLength: 22,
    },
    {
        size: 'L-XL',
        shoulderWidth: 41,
        chestCircumference: 100,
        waistCircumference: 96,
        frontSize: 70,
        backSize: 65,
        armLength: 24,
    },
]

function DetailProductContent() {
    return (
        <>
            {/* Main Info */}
            <Flex pb='5rem' gap='3rem' >
                <VStack spaceY='1rem' w='50%'>
                    <Image src={'/detail-product.jpg'} aspectRatio='square' w='full' maxW='44rem' zIndex={1} />

                    <Flex w='100%' gapX={'1rem'}
                        overflow={'scroll'}
                        css={{
                            '& > *': {
                                flexShrink: 1,
                                flexGrow: 0,
                                minWidth: '100px',
                            },
                        }}
                        className="scrollbar-hide"
                        >
                        <Image src={'/detail-product-2.jpg'} aspectRatio='square' />
                        <Image src={'/detail-product-3.jpg'} aspectRatio='square' />
                        <Image src={'/detail-product-4.jpg'} aspectRatio='square' />
                    </Flex>
                </VStack>

                <VStack alignItems='flex-start' spaceY='1rem'>
                    <Heading size='xl' color='black'>
                        Batik Kombinasi Wanita -Blouse Navy Red
                    </Heading>

                    <Group>
                        <HStack>
                            {
                                Array.from({
                                    length: 5
                                }, () => (
                                    <Icon size='md'>
                                        <FaStar />
                                    </Icon>
                                ))
                            }
                        </HStack>
                        <Text color='neutral.500' variant='lg.none.medium'>
                            (875)
                        </Text>
                    </Group>
                    {/* Harga */}
                    <Text color='black' variant='lg.none.medium' fontSize='24px'>
                        {rupiahFormatter.format(365000)}
                    </Text>

                    {/* Ukuran */}
                    <VStack alignItems='flex-start' spaceY='0.5rem'>
                        <Text color='black'>Ukuran</Text>

                        <Group>
                            <Button borderRadius='1rem' variant='outline' borderColor='black'>
                                S
                            </Button>
                            <Button borderRadius='1rem' variant='outline' borderColor='black'>
                                M
                            </Button>
                            <Button borderRadius='1rem' variant='outline' borderColor='black'>
                                L
                            </Button>
                            <Button borderRadius='1rem' variant='outline' borderColor='black'>
                                XL
                            </Button>
                            <Button borderRadius='1rem' variant='lowStroke'>
                                XXL
                            </Button>
                        </Group>
                    </VStack>

                    {/* Kuantitas */}
                    <VStack spaceY='1rem' alignItems='flex-start'>
                        <Text variant='lg.none.medium' color='black'>Kuantitas</Text>
                        <Flex border='1px solid black' p='0.1rem' borderRadius='xl' alignItems='center' justifyContent='space-between'>
                            <IconButton variant='flat' >
                                <FaMinus />
                            </IconButton>
                            <Text color='black' mx='1rem'>
                                1
                            </Text>
                            <IconButton variant='flat'>
                                <FaPlus />
                            </IconButton>

                        </Flex>
                    </VStack>

                    <VStack w='full'>
                        <Button variant='outline' w='full' borderColor='primary.500' border='2px solid' >
                            Tambahkan ke Keranjang
                        </Button>
                        <Button variant='filled' w='full' bgColor='primary.500' border='2px solid' >
                            Beli Sekarang
                        </Button>
                    </VStack>

                    {/* CTA */}
                </VStack>
            </Flex>


            {/* Deskripsi */}
            <VStack alignItems='flex-start' pb='3rem' spaceY='0.8rem' >
                <hr style={{
                    height: '3px',
                    backgroundColor: '#808080',
                    width: '100%',
                    borderRadius: '3px'
                }} />

                <Heading color='black' >
                    Deskripsi Singkat
                </Heading>
                <Text color='black' variant='reg.normal.reg'>
                    Blouse kutu baru modern dengan aksen batik cap khas Pekalongan, cocok untuk tampilan feminin yang elegan namun tetap kasual. Perpaduan warna navy dan merah membuat kesan berani namun tetap anggun. Desain kerah kotak dan potongan regular fit-nya pas untuk dipakai sehari-hari maupun acara semi-formal.
                </Text>
            </VStack >

            {/* Detail Produk */}
            < VStack alignItems='flex-start' pb='3rem' spaceY='0.8rem' >
                <Heading color='black' >
                    Detail Produk
                </Heading>
                <Box as="ul" listStyleType="circle" listStylePosition="inside">
                    <li>Model blouse kutu baru dengan aksen batik cap dari Pekalongan</li>
                    <li>Perpaduan warna navy dan merah</li>
                    <li>Kerah kotak (square neckline) yang simpel dan elegan</li>
                    <li>Regular fit, nyaman dipakai sepanjang hari</li>
                    <li>Tanpa furing (unlined)</li>
                    <li>Ringan dan tidak stretch</li>
                    <li>Cocok untuk kegiatan formal kasual atau acara spesial</li>
                </Box>
            </ VStack>

            {/* Bahan */}
            <VStack alignItems='flex-start' pb='3rem' spaceY='0.8rem' >
                <Heading color='black' >
                    Bahan
                </Heading>
                <Box as="ul" listStyleType="circle" listStylePosition="inside">
                    <li>Kombinasi Polyester Uragiri dan Katun</li>
                    <li>Nyaman, tidak panas, dan mudah dirawat</li>
                </Box>
            </VStack >

            {/* Ukuran */}
            < Stack gap="0.8rem" pb='3rem' >
                <Heading color='black' >
                    Ukuran
                </Heading>

                <Table.Root size='md'>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader>Ukuran</Table.ColumnHeader>
                            <Table.ColumnHeader>Lebar Bahu</Table.ColumnHeader>
                            <Table.ColumnHeader>Lingkar Dada</Table.ColumnHeader>
                            <Table.ColumnHeader>Lingkar Pinggang</Table.ColumnHeader>
                            <Table.ColumnHeader>Panjang Depan/Belakang</Table.ColumnHeader>
                            <Table.ColumnHeader textAlign="end">Panjang Lengan</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {productSize.map((item, i) => (
                            <Table.Row key={i} >
                                <Table.Cell border='none'>{item.size}</Table.Cell>
                                <Table.Cell border='none'>{cmFormatter.format(item.shoulderWidth)}</Table.Cell>
                                <Table.Cell border='none'>{cmFormatter.format(item.chestCircumference)}</Table.Cell>
                                <Table.Cell border='none'>{cmFormatter.format(item.waistCircumference)}</Table.Cell>
                                <Table.Cell border='none'>{`${cmFormatter.format(item.frontSize)} / ${cmFormatter.format(item.backSize)}`}</Table.Cell>
                                <Table.Cell textAlign="end" border='none'> {cmFormatter.format(item.armLength)}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </ Stack>


            <Text color={'black'} variant='reg.normal.medium'>
                ⚠️ Toleransi ukuran ±1–2 cm.
                <br />
                Ukuran setiap produk bisa berbeda, pastikan cek detail ukuran sebelum membeli.
            </Text>

            {/* Bahan */}
            <VStack alignItems='flex-start' py='2rem' spaceY='0.8rem'>
                <Heading color='black' >
                    Petunjuk Perawatan
                </Heading>
                <Box as="ul" listStyleType="circle" listStylePosition="inside">
                    <li>Cuci dengan tangan menggunakan sabun lembut</li>
                    <li>Jangan gunakan deterjen atau pemutih</li>
                    <li>Hindari jemur langsung di bawah sinar matahari</li>
                    <li>Setrika dengan suhu sedang jika diperlukan</li>
                </Box>
            </VStack>
        </>
    )
}

export default DetailProductContent
