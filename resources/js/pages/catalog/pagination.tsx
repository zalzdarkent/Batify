import { ButtonGroup, Center, IconButton, Pagination } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

function PaginationComponent() {
    return (
        <Center px='5rem' pb='3rem'>
            <Pagination.Root count={20} pageSize={2} defaultPage={1} >
                <ButtonGroup variant="ghost" size="sm">
                    <Pagination.PrevTrigger asChild>
                        <IconButton>
                            <LuChevronLeft />
                            Sebelumnya
                        </IconButton>
                    </Pagination.PrevTrigger>

                    <Pagination.Items
                        render={(page) => (
                            <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                                {page.value}
                            </IconButton>
                        )}
                    />

                    <Pagination.NextTrigger asChild>
                        <IconButton>
                            Berikutnya
                            <LuChevronRight />
                        </IconButton>
                    </Pagination.NextTrigger>
                </ButtonGroup>
            </Pagination.Root>
        </Center>
    )
}

export default PaginationComponent
