import {createSlice} from "@reduxjs/toolkit"
import  axios  from 'axios';

const initialState = {
    count: 0
}

export const CountSlice = createSlice({
    name: "countXd",
    initialState, 
    reducers: {
        setCurrentCount: (state, action) => {
            state.count = action.payload
        }
    }   
})


export const {setCurrentCount} = CountSlice.actions

export default CountSlice.reducer

export const setCurrentCountFn = () => (dispatch) => {
    axios.get("https://portafolioapigrey.herokuapp.com/api/dataindex")
    .then((res) => {
        // console.log(res.data.count);
        dispatch(setCurrentCount(res.data.count))
    })
    .catch((err) => console.error(err))
}