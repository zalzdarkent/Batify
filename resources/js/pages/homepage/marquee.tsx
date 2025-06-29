import { HStack, Text } from "@chakra-ui/react"

function Marquee() {
    return (
        <HStack bgColor='primary.500' py='1.5rem' spaceX='1rem' overflow='hidden'>
            {
                Array.from({ length: 20 }, () =>
                    <HStack whiteSpace='nowrap'>
                        <Text>
                            Flash Sale
                        </Text>
                        <Text>
                            -
                        </Text>
                        <Text>
                            00.00 WIB
                        </Text>
                    </HStack>
                )
            }
        </HStack>
    )
}

export default Marquee
