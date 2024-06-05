import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";
import Container from "@/components/ui/container";
import React from "react";

interface ProductPageProps {
  params: { productId: string };
}

export const revalidate = 0;

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params?.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
    productId: product.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images}/>
            <div className="mt-0 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info */}
              <div>
                Name: {product.name}
                <br />
                ID: {product.id}
                <br />
                {/* <pre>{product}</pre> */}
                Category: {product?.category?.name}
                <br/>
                {product.price} $
                <br />
                {/* Summary: {suggestedProducts?.length} */}
              </div>
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Из этой же категории" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
