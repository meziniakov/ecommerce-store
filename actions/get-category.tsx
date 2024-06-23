import { Category } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (slug: string): Promise<Category> => {
  const res = await fetch(URL);
  const categories: Category[] = await res.json();
  const category = categories.filter((category) => category.slug === slug)[0];

  return category || categories;
};
export default getCategory;
