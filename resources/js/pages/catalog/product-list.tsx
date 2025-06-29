import { rupiahFormatter } from "@/utils/number-formatter"
import { Button, Card, Circle, Grid, GridItem, HStack, IconButton, Image, Link, Text } from "@chakra-ui/react"
import { MdAddShoppingCart } from "react-icons/md";

function ProductList() {
    return (
        <Grid templateColumns="repeat(5, 1fr)" gap="6" px='5rem' pb='3rem'>
            {Array.from({
                length: 15
            }, (_, i) => (
                <GridItem key={i}>
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
    )
}

export default ProductList
