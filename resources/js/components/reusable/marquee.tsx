import { HStack, Text } from "@chakra-ui/react"

function Marquee() {
    return (
        <HStack bgColor='primary.500' py='1.5rem' spaceX='1rem' overflow='hidden'>
            {
                Array.from({ length: 20 }, (_, i) =>
                    <HStack whiteSpace='nowrap' key={i}>
                        <Text color='white'>
                            Gunakan kode BATIKBARU saat checkout.
                        </Text>
                        <Text color='white'>
                            -
                        </Text>
                        <Text color='white'>
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