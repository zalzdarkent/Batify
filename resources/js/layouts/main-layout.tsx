import Footer from "@/components/reusable/footer"
import Navbar from "@/components/reusable/navbar"
import { Box } from "@chakra-ui/react"
import { Head, usePage } from "@inertiajs/react"
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
    const { url } = usePage()

    const isGeneralPage = ['/', '/katalog', /^\/katalog\/\d+$/].some(path => typeof path === 'string' ? path === url : path.test(url))

    return (
        <>
            <Head title={title} />
            <Navbar />
            <Box {...props} minH={'calc(100vh - 7rem)'}>
                {children}
            </Box>

            {
                isGeneralPage && <Footer />
            }
        </>
    )
}

export default MainLayout
