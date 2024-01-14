import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './cart.init-state'
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingProduct = state.cart.find(
        product => product.id === payload.id
      )

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.cart.push({ ...payload, quantity: 1 })
      }
    },
    updateQuantity: (state, action) => {
      const { productId, operation } = action.payload
      const item = state.cart.find(el => el.id === productId)

      if (item) {
        if (operation === 'increment') {
          item.quantity += 1
        } else if (operation === 'decrement' && item.quantity > 0) {
          item.quantity -= 1
        }
      }
    },
    removeItemsById: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
    },
    clearCart: (state, _) => {
      state.cart = []
    }
  }
})

export const { addToCart, updateQuantity, removeItemsById, clearCart } =
  cartSlice.actions
