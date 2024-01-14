
import { BsFillCartCheckFill } from "react-icons/bs"
interface IIconCart { }

export default function IconCart({ }: IIconCart) {
    return <div className="absolute top-0 right-[-10px]">
        <BsFillCartCheckFill className="w-8 h-8 fill-yellow-500" />
    </div>
}
