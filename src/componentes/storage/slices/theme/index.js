import {createSlice} from "@reduxjs/toolkit"

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        darkmodeOn: false
    }, 
    reducers: {
        toogleTheme: (state) => {
            state.darkmodeOn = !state.darkmodeOn
        }
    }
})

export const {toogleTheme} = themeSlice.actions

export default themeSlice.reducer