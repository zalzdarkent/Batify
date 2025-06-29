import { navbarMenu } from "@/constants/navbar-menu"
import { Flex, Group, IconButton, Image, Text, Link, Circle } from "@chakra-ui/react"
import SearchIcon from '@/assets/icons/search-normal.png'
import UserIcon from '@/assets/icons/user.png'
import ShopIcon from '@/assets/icons/shop.png'
import { Link as InertiaLink } from '@inertiajs/react'
import { useIsMobile } from "@/hooks/use-mobile"
import HamburgerButton from "./hamburger-button"

function Navbar() {
    const isMobile = useIsMobile();

    return (
        <Flex alignItems='center' justifyContent='space-between' px={{
            base: '1rem',
            lg: '3rem'
        }} zIndex={100} bgColor='white' position='sticky' top='0' opacity={80 / 100} borderBottom='2px solid' borderColor='neutral.400' h='7rem'>
            <Link href="/">
                <Image alt="Batify Logo" src="/logo.png" w="12vw" minW='8rem' py={5} />
            </Link>

            {
                !isMobile ?
                    <Group spaceX={'1.5rem'}>
                        {navbarMenu.map((menuItem) => (
                            <Link
                                asChild
                                key={menuItem.url}
                            >
                                <Link
                                    href={`/${menuItem.url}`}
                                >
                                    <Text color='neutral.900'>{menuItem.label}</Text>
                                </Link>
                            </Link>
                        ))}
                        <IconButton bg={'transparent'}>
                            <Image src={SearchIcon} boxSize={6} />
                        </IconButton>
                        <IconButton bg={'transparent'}>
                            <Image src={UserIcon} />
                        </IconButton>
                        <InertiaLink href="/keranjang">
                            <IconButton bg={'transparent'}>
                                <Image src={ShopIcon} />
                            </IconButton>
                        </InertiaLink>
                    </Group> : (
                        <Group>
                            <InertiaLink href="/keranjang">
                                <IconButton bg={'transparent'} position='relative'>
                                    <Image src={ShopIcon} />
                                    <Circle bgColor='black' position='absolute' w='1.2rem' top={-1} right={-1} p='4px' aspectRatio='square' justifyContent='center' alignItems='center' zIndex={100}>
                                        <Text color='white' variant='tn.none.medium'>
                                            1
                                        </Text>
                                    </Circle>
                                </IconButton>
                            </InertiaLink>
                            <HamburgerButton />
                        </Group>
                    )
            }
        </Flex >
    )
}

export default Navbar