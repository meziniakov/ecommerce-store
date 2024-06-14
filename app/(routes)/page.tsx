import Container from "@/components/ui/container";
import Billboard from "@/components/Billboard";
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

const HomePage = async ({}) => {
  const products = await getProducts({});
  const billboard = await getBillboards("cfcdd34f-0898-4275-88ff-7f161c2760a0");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured products" items={products} />
        </div>
      </div>
    </Container>
  );
};
export default HomePage;
