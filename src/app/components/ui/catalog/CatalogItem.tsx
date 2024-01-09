import { IProduct } from "@/types/product.interface";
import Image from "next/image";
import Link from "next/link";


export default function CatalogItem({ product }) {
    return (
        <>
            <Link href={`/product/${product.slug}`}>
            <div key={product.id} className="bg-white shadow-md rounded-md p-4 mb-4 flex flex-col">
            <div className="w-full flex justify-center items-center">
                <Image src={product.images[0]} width={150} height={100} alt="Product Image" className="w-full object-cover" />
            </div>
            <div className="w-2/3 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <div className="text-gray-600 mb-2">{product.category.name}</div>
                    <div className="text-gray-800 font-semibold">{product.price}</div>
                </div>
                {/* Добавьте компоненты для рейтинга и других данных */}
            </div>
        </div>
            </Link>
        </>
    )
}
