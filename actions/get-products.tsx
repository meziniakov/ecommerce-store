import { Product } from "@/types/types";
import queryString from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string | number;
  sizeId?: string;
  colorId?: string;
  isFeatured?: string;
  productId?: string;
}
const getProducts = async (query: Query): Promise<Product[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      productId: query.productId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);
  const data = await res.json();

  //TODO delete fake api
  const products = data.map(item => ({
    id: item.id,
    name: item.title,
    price: item.price,
    category: {
      id: item.category.id,
      name: item.category.name,
    },
    images: item.images.map(image => ({"id": item.category.id , "url": image}))
  }))
  return products
};
export default getProducts;
