import { IInitialState } from "@/store/card/cart.interface";
import { useSelector } from "react-redux";

export const useTotal = () => {
    const { cart } = useSelector((state: { cart: IInitialState, quantity: number }) => state.cart);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0)
    return {
        totalItems,
        totalPrice,
    }
}