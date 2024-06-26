import { Billboard as BillboardType } from "@/types/types";

interface BillboardProps {
  data: BillboardType | undefined;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 overflow-hidden sm:p-6 lg:p-8 rounded-xl">
      <div
        className="rounded-xl relative aspect-[3/1] sm:aspect-[4/1] overflow-hidden"
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full text-center gap-y-8">
          <div className="max-w-xs text-3xl text-white font-bold sm:text-5xl lg:text-6xl sm:max-w-xl">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Billboard;
