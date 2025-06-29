import { Breadcrumb, Heading, Text, VStack } from "@chakra-ui/react"

function Header() {
    return (
        <VStack alignItems='flex-start' spaceY='0.3rem' px='5rem' py='3rem'>
            <Breadcrumb.Root>
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

            <Heading color="black" size='xl'>
                Jelajahi Koleksi Batik Terbaik Kami
            </Heading>

            <Text color="black">
                Dari yang klasik sampai yang nyentrik—semua batik di sini punya cerita, dan mungkin salah satunya cocok buat kamu.
            </Text>
        </VStack>
    )
}

export default Header
