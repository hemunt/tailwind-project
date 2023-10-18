import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'colorsSlice',
    initialState: {
        value: {
            isDark:false,
            mainOrange : "#FF7549",
            mainBlue:"#2558AB",
            titleTextColor:"text-slate-800",
            lightBlack:"text-slate-400",
            lightBackgroundColor: "#F7F9FE",
        },
    },
    reducers: {
        lightColors: (state) => {
            state.value = {
                isDark:false,
               mainOrange : "#FF7549",
               mainBlue:"#2558AB",
               titleTextColor:"text-slate-800",
               lightBlack:"text-slate-400",
               lightBackgroundColor: "#F7F9FE",
           }
        },
        // darkColors: (state) => {
        //     state.value = {
        //         isDark:true,
        //         mainOrange : "#FF7549",
        //         mainBlue:"#2558AB",
        //         titleTextColor:"text-white",
        //         lightBlack:"text-slate-400",
        //         lightBackgroundColor: "#1D1D1D",
        //     }
        // },

        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { lightColors,darkColors } = counterSlice.actions

export default counterSlice.reducer