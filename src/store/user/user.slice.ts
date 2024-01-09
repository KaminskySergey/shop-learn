import { createSlice } from '@reduxjs/toolkit';
import { initialState } from "./user.init-state"
import { checkAuth, login, logout, register } from "./user.actions"

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(register.pending, state => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
        })
        .addCase(register.rejected, (state) => {
            state.isLoading = false
        })
        .addCase(login.pending, state => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
        })
        .addCase(login.rejected, (state) => {
            state.isLoading = false
        })
        .addCase(logout.fulfilled, (state) => {
            state.isLoading = false
            state.user = null
        })
        .addCase(checkAuth.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
        })
    }
})