import { configureStore } from "@reduxjs/toolkit";
import { ActionModel } from "./action.interface"
import { StateModel } from "./state.interface"
import {Reducer} from 'redux'

const ApplicationState:StateModel = {
    online:true,
    messages:[],
    user:null,
    outgoingMessage:null
}

/* reducer */ 
const actionProcessor:Reducer<StateModel,ActionModel> = (state, action) : any =>{

    console.log(state);

    return state;
}

const store = configureStore({
    reducer:actionProcessor,
    devTools:true
})

export {store}