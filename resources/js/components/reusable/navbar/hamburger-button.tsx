import { Group, IconButton, Link, Drawer, Portal, CloseButton, InputGroup, Input } from "@chakra-ui/react"
import { RxHamburgerMenu } from "react-icons/rx";
import { LuSearch } from "react-icons/lu"
import { navbarMenu } from "@/constants/navbar-menu";

function HamburgerButton() {
    return (
        <Drawer.Root>
            <Drawer.Trigger asChild>
                <IconButton aria-label="Search database" variant='outline' size='lg' p='2px'>
                    <RxHamburgerMenu />
                </IconButton>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content py='5rem'>
                        <Drawer.Body px='0.5rem'>
                            <Group flexDirection="column" alignItems='start' w='full'>
                                <InputGroup flex="1" startElement={<LuSearch />}>
                                    <Input placeholder="Cari produk..." />
                                </InputGroup>
                                {
                                    navbarMenu.map(menu => {
                                        const Icon = menu.icon();
                                        return (
                                            <Link href={`/${menu.url}`} w='full' _hover={{
                                                textDecoration: 'none'
                                            }}>
                                                <IconButton w='full' justifyContent='start' p='1rem' bg='bg.panel' color='black' fontSize='1rem' size='xl' variant='outline' _hover={{
                                                    bgColor: 'neutral.200'
                                                }}>
                                                    {<Icon />}
                                                    {menu.label}
                                                </IconButton>
                                            </Link>
                                        )
                                    }
                                    )
                                }
                            </Group>
                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}

export default HamburgerButton
