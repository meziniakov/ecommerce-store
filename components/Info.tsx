import { Product } from "@/types/types"
import Currency from "./ui/currency"
import Button from "./ui/Button"
import { ShoppingCart } from "lucide-react"

interface InfoProps {
    product: Product
}
const Info: React.FC<InfoProps> = ({product}) => {
return (
    <div>
        <h1 className="font-bold text-3xl text-gray-900">{product.name}</h1>
        <div className="mt-3 items-end justify-between">
            <p className="text-2xl text-gray-900">
                <Currency value={product?.price}/>
            </p>
        </div>
        <hr className="my-4"/>
        <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Категория: </h3>
            <div>{product?.category?.name}</div>
        </div>
        <div className="flex items-center gap-x-3 mt-10">
            <Button className="flex items-center gap-x-2">
                Добавить в корзину
                <ShoppingCart/>
            </Button>
        </div>
    </div>
 )
}
 
 export default Info