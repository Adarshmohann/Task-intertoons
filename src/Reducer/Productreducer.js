
import { ADD_PRODUCTS, DISPLAY_DETAILS } from "../Constants/Actiontypes";



export const Reducers = (state = [], action) =>{
	switch(action.type){
		case ADD_PRODUCTS:
			return[...state,action.payload];

		case DISPLAY_DETAILS:
		    return[...state,action.payload]
		default:
			return state;       
	}
}