import { HStack, Text } from "@chakra-ui/react"

function Marquee() {
    return (
        <HStack bgColor='primary.500' py='1.5rem' spaceX='1rem' overflow='hidden'>
            {
                Array.from({ length: 20 }, (_, i) =>
                    <HStack whiteSpace='nowrap' key={i}>
                        <Text color='white'>
                            Flash Sale
                        </Text>
                        <Text color='white'>
                            -
                        </Text>
                        <Text color='white'>
                            00.00 WIB
                        </Text>
                    </HStack>
                )
            }
        </HStack>
    )
}

export default Marquee
