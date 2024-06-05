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

  return await res.json()
};
export default getProducts;
