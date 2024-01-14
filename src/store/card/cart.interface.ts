import { IProduct } from "@/types/product.interface"


interface ICartState {
  cart: IProduct[];
}

export interface IInitialStateCatalog {
    cart: ICartState,
    isLoading: boolean
}



export interface IInitialState {
    cart: ProductWithQuantity[],
    isLoading: boolean
}

export interface ProductWithQuantity extends IProduct {
    quantity: number;
  }
