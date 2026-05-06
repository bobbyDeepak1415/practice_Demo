import { createSlice } from "@reduxjs/toolkit"


const initialState={
    count:{
value:0
    }
}



const counterSlice=createSlice({
    name:"Counter"
})