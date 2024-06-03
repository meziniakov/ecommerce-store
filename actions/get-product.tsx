import { Product } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  let data = await res.json();
  //TODO delete fake api
  data = {
    id: data.id,
    name: data.title,
    price: data.price,
    category: {
      id: data.category?.id,
      name: data.category?.name,
    },
    images: data.images?.map(image => ({"id": data.category.id , "url": image}))
  }
  return data
};
export default getProduct;
