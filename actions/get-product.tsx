import { Product } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  let product = await res.json()
  //TODO
  product.colorId = {
      "id": "708d98b2-63a2-4b1f-9c90-86d015dbff9e",
      "created_at": "2024-06-06 11:22:04.832852+00",
      "name": "Белый",
      "value": "#fff",
      "storeId": "65b2014a-8368-4f2b-8f72-eef03ac041e3",
      "updated_at": null
    }

  return product;
};
export default getProduct;
