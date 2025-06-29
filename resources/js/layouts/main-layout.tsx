import Footer from "@/components/reusable/footer"
import Navbar from "@/components/reusable/navbar"
import { Box } from "@chakra-ui/react"
import { Head } from "@inertiajs/react"
import React from "react"

interface Props {
    children: React.ReactNode
    title: string
    [key: string]: any
}

function MainLayout({
    children,
    title,
    ...props
}: Props) {
    return (
        <>
            <Head title={title} />
            <Navbar />
            <Box {...props}>
                {children}
            </Box>
            <Footer />
        </>
    )
}

export default MainLayout
