import { Box, HStack, Input, InputGroup, For, IconButton, Text, VStack, Portal, Select, createListCollection, Icon } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";

const frameworks = createListCollection({
    items: [
        { label: "React.js", value: "react" },
        { label: "Vue.js", value: "vue" },
        { label: "Angular", value: "angular" },
        { label: "Svelte", value: "svelte" },
    ],
})

function Filter() {
    return (
        <HStack px='5rem' py='3rem'>
            <InputGroup startElement={
                <Icon size='lg'>
                    <CiSearch />
                </Icon>}
            >
                <Input placeholder="Terapkan Filter" fontSize='1rem' p='1rem' />
            </InputGroup>
            <IconButton
                aria-label="Call support"
                variant='surface'
            >
                <IoFilter />
            </IconButton>
            <Select.Root collection={frameworks} size="lg" width="320px">
                <Select.HiddenSelect />
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Urutkan Menurut" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator />
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {frameworks.items.map((framework) => (
                                <Select.Item item={framework} key={framework.value}>
                                    {framework.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>
        </HStack>
    )
}

export default Filter
