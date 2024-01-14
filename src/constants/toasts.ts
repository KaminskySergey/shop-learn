import { toast } from "react-toastify";

export const notifyAddToCart = () => toast.success("Product added to cart!");
export const notiOrderSuccess = (data: string) => toast.success(data);
export const notifyOrderError = (data: string) => toast.error(data);
export const notifyDeleteFromCart = () => toast.success("Product removed from the cart!");
export const notifyClearAllCart = () => toast.success("Cart is completely cleared!");
  export const notifyErrorToCart = () => toast.error("Error!");