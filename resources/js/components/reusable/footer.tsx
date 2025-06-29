import { Grid, GridItem, Group, Heading, HStack, IconButton, Image, Text, VStack, Button, Input } from "@chakra-ui/react"
import { system } from "@/lib/theme/extendedTheme"
import InstagramLogo from '@/assets/icons/instagram-logo.png'
import LinkedInLogo from '@/assets/icons/linkedin-logo.png'
import XLogo from '@/assets/icons/x-logo.png'
import WhatsappLogo from '@/assets/icons/whatsapp-logo.png'
import { footerMenu } from "@/constants/footer-menu"
import { Link } from "@inertiajs/react"

function Footer() {
    return (
        <Group bg={system.token('colors.primary.500')} h={300} w={'full'} color={'white'} px={'5rem'} py='12rem'>
            <Grid templateColumns={'repeat(6, 1fr)'} gapY='2rem' gapX={'10rem'}>
                <GridItem colSpan={2}>
                    <VStack alignItems={'flex-start'} spaceY='1rem'>
                        <Image src="/logo-transparent.png" alt="Batify Logo" width={150} />
                        <Text variant='reg.normal.reg'>
                            Batify adalah rumahnya batik lokal berkualitas tinggi. Kami hadir untuk generasi yang ingin tampil gaya tanpa melupakan budaya. Semua produk kami 100% asli buatan pengrajin Indonesia.
                        </Text>
                        <HStack>
                            <IconButton bgColor="transparent" >
                                <Image src={InstagramLogo} />
                            </IconButton>
                            <IconButton bgColor="transparent" >
                                <Image src={LinkedInLogo} />
                            </IconButton>
                            <IconButton bgColor="transparent" >
                                <Image src={XLogo} />
                            </IconButton>
                            <IconButton bgColor="transparent" >
                                <Image src={WhatsappLogo} />
                            </IconButton>
                        </HStack>
                    </VStack>
                </GridItem>

                <GridItem>
                    <VStack spaceY='1rem' justifyContent='center' h={'full'}>
                        {footerMenu.map(menuItem => (
                            <Link href={`/${menuItem.url}`}>
                                <Text variant={menuItem.url !== '' ? 'reg.normal.reg' : 'reg.normal.bold'}>
                                    {menuItem.label}
                                </Text>
                            </Link>
                        ))}
                    </VStack>
                </GridItem>

                <GridItem colSpan={3}>
                    <VStack spaceY={'2rem'} justifyContent='center'>
                        <Heading color={'white'} size='lg'>
                            Dapatkan info batik terbaru & promo menarik langsung ke email kamu
                        </Heading>

                        <form style={{ width: '100%' }}>
                            <Group bgColor='gray.100' w={'full'} borderRadius='3xl' p='0.5rem'>
                                <Input type="text"
                                    placeholder="Ketik email kamu"
                                    bg='transparent'
                                    border={0}
                                    css={{
                                        '&::placeholder': {
                                            color: 'black',
                                            fontSize: 'md'
                                        },
                                    }}
                                />
                                <Button bgColor='blue.600' borderRadius={'3xl'}  >
                                    <Text variant='reg.none.reg'>
                                        Berlangganan
                                    </Text>
                                </Button>
                            </Group>
                        </form>

                        <Text variant='reg.normal.reg' >
                            Tenang, kami gak bakal spam kamu. Cuma info penting, promo seru, dan update batik terbaru aja yang akan dikirim ke inbox kamu.
                        </Text>
                    </VStack>
                </GridItem>

                <GridItem colSpan={6}>
                    <Text variant="reg.none.reg">
                        © 2025 Batify. All Right Reserved.
                    </Text>
                </GridItem>
            </Grid>
        </Group>
    )
}

export default Footer