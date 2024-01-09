import { ICartItem } from "@/types/cart.interface";
import { IUser } from "@/types/user.interface";

export enum EnumOrderStatus {
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED',
}

export interface IOrder {
id: number,
createdAt: string,
items: ICartItem[],
status: EnumOrderStatus,
user: IUser
}