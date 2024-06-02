import { Billboard as BillboardType } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (id: string): Promise<BillboardType> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};
export default getBillboards;
