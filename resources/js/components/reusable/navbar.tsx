import { navbarMenu } from "@/constants/navbar-menu"
import { Flex, Group, IconButton, Image, Text, Link } from "@chakra-ui/react"
import SearchIcon from '@/assets/icons/search-normal.png'
import UserIcon from '@/assets/icons/user.png'
import ShopIcon from '@/assets/icons/shop.png'

function Navbar() {
    return (
        <Flex justifyContent='space-between' px={'3rem'} zIndex={100} bgColor='white'>
            <Link href="/">
                <Image alt="Batify Logo" src="/logo.png" w="12vw" py={5} />
            </Link>
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
                <IconButton bg={'transparent'}>
                    <Image src={ShopIcon} />
                </IconButton>
            </Group>
        </Flex>
    )
}

export default Navbar