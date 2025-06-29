import { HStack, Text } from "@chakra-ui/react"

function Marquee() {
    return (
        <HStack bgColor='primary.500' py='1.5rem' spaceX='1rem' overflow='hidden'>
            {
                Array.from({ length: 20 }, () =>
                    <HStack whiteSpace='nowrap'>
                        <Text>
                            Gunakan kode BATIKBARU saat checkout.
                        </Text>
                        <Text>
                            -
                        </Text>
                        <Text>
                           Diskon 20% untuk pengguna baru!
                        </Text>
                        <Text>
                            -
                        </Text>
                    </HStack>
                )
            }
        </HStack>
    )
}

export default Marquee