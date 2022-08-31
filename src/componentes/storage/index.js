import {configureStore} from "@reduxjs/toolkit"

// reducers
import theme from "./slices/theme"

 const store = configureStore({
    reducer: {
        theme: theme
    }
})

export default store