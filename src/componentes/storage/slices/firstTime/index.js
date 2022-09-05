import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: true
}

export const firstTimeSlice = createSlice({
    name: "FirstTime", 
    initialState, 
    reducers: {
        toogleFirst: (state) => {
            state.value = false
        }
    }
})

export const {toogleFirst} = firstTimeSlice.actions

export default firstTimeSlice.reducer