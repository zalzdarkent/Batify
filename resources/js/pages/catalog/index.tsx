import Marquee from "@/components/reusable/marquee"
import MainLayout from "@/layouts/main-layout"
import Header from "./header"
import Filter from "./filter"
import ProductList from "./product-list"
import PaginationComponent from "./pagination"

function Catalog() {
    return (
        <MainLayout title="Katalog">
            <Marquee />
            <Header />
            <Filter />
            <ProductList />
            <PaginationComponent />
        </MainLayout>
    )
}

export default Catalog
