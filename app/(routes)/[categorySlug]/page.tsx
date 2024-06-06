import getCategory from "@/actions/get-category"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/Billboard"
import Filter from "@/components/Filter"
import MobileFilters from "@/components/MobileFilters"
import ProductCard from "@/components/ProductCard"
import ProductList from "@/components/ProductList"
import Container from "@/components/ui/container"
import NoResults from "@/components/ui/no-results"

const CategoryName = async ({params, searchParams}) => {
    const category = await getCategory(params.categorySlug)
    
    const products = await getProducts({
        categoryId: searchParams.categoryId
    })

    // const products = []

    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category?.billboardId} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* Add mobile filter */}
                        <MobileFilters />
                        <div className="hidden lg:block border-r">
                            <Filter />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults/>}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map(item => (
                                    <ProductCard key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default CategoryName