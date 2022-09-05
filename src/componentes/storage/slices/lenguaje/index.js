import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: false
}

export const lenguajeSlice = createSlice({
    name: "lenguaje", 
    initialState, 
    reducers: {
        switchLenguaje: (state) => {
            state.value = !state.value
        }
    }
})

export const {switchLenguaje} = lenguajeSlice.actions

export default lenguajeSlice.reducer