import { configureStore, createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'auth',
    initialState:{isAuth:false},
    reducers: {
        login(state) {
            ;debugger
            state.isAuth=true
        },
        logout(state) {
            state.isAuth=false
        }      
    }
})

export const authActions =authSlice.actions; 
export default authSlice.reducer;