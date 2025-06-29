import MainLayout from "@/layouts/main-layout"
import { cmFormatter, rupiahFormatter } from "@/utils/number-formatter";
import { Heading, HStack, IconButton, Image, Text, VStack, Breadcrumb, Group, Icon, Button, Flex, Box, Stack, Table, Card, Circle, Grid, GridItem, Link } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import DetailProductContent from "./content";

function DetailProduct() {
    return (
        <MainLayout title="Batik Kombinasi Wanita - Blouse Navy Red" px='5rem' pb='3rem'>
            <Breadcrumb.Root py='3rem'>
                <Breadcrumb.List fontSize={'1rem'}>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>

            <DetailProductContent />

            <hr style={{
                height: '3px',
                backgroundColor: '#808080',
                width: '100%',
                borderRadius: '3px',
                marginBottom: '3rem'
            }} />

            {/* Produk Terkait */}
            <VStack alignItems='flex-start' spaceY='0.8rem' >
                <Heading color='black' >
                    Produk Terkait
                </Heading>

                <Grid templateColumns="repeat(5, 1fr)" gap="6" pb='3rem' w='full'>
                    {Array.from({
                        length: 5
                    }, () => (
                        <GridItem>
                            <Card.Root maxW="sm" overflow="hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    alt="Green double couch with wooden legs"
                                />
                                <Card.Body gap="2">
                                    <Card.Title>Batik Kombinasi Wanita -Blouse Navy Red</Card.Title>
                                    <Card.Description>
                                        This sofa is perfect for modern tropical spaces, baroque inspired
                                        spaces.
                                    </Card.Description>
                                    <HStack>
                                        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2" color='black'>
                                            {rupiahFormatter.format(365000)}
                                        </Text>
                                        <Circle bgColor='secondary.500' p='0.5rem'>
                                            <Text variant='xs.none.reg' color='primary.500'>
                                                Stok Terbatas
                                            </Text>
                                        </Circle>
                                    </HStack>
                                </Card.Body>
                                <Card.Footer gap="2">
                                    <Link href="/katalog/1" _hover={{
                                        textDecoration: 'none'
                                    }}>
                                        <Button variant="outline" flexGrow='1' rounded='full'>Lihat Detail Produk</Button>
                                    </Link>
                                    <IconButton variant="filled" bgColor='primary.500' rounded='full'>
                                        <MdAddShoppingCart />
                                    </IconButton>
                                </Card.Footer>
                            </Card.Root>
                        </GridItem>
                    ))}
                </Grid>
            </VStack>
        </MainLayout>
    )
}

export default DetailProduct
