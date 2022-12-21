
import { ADD_PRODUCTS,DISPLAY_DETAILS } from "../Constants/Actiontypes"

export function addProducts(data){
    return{
        type:ADD_PRODUCTS,
        payload:data
    }
}

export function displayDetails(data){
    return{
        type:DISPLAY_DETAILS,
        payload:data
    }
}