import {configureStore} from "@reduxjs/toolkit"

import theme from "./slices/theme"
import firstTimeReducer from "./slices/firstTime"
import CountSlice from "./slices/count"
import lenguaje from "./slices/lenguaje"

 const store = configureStore({
    reducer: {
        theme: theme, 
        firstTime: firstTimeReducer,
        count: CountSlice,
        lenguaje: lenguaje
    }
})

export default store