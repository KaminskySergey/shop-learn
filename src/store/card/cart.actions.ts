import { createAsyncThunk } from '@reduxjs/toolkit'

import CartService from '@/services/cart/cart.service'

// export const submitOrder = createAsyncThunk('submitOrder', async (credentials, thunkAPI) => {
//   try {
//       await CartService.addProductToCard(`/order`, credentials)
//       return credentials;
      
//   } catch (error) {
//       return thunkAPI.rejectWithValue('помилка в операціях')
//   }
// })