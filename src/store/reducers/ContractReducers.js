import { SET_CONTRACT, SET_TOKEN } from "../actions/ContractActions";

const contractReducer = (state = {  }, { type, payload }) =>{
	switch(type){
		case SET_CONTRACT: 
			return {
				...state,
				contract: payload,
			};
		case SET_TOKEN: 
			return {
				...state,
				token: payload,
			};
			
		default:
			return state;
		 
	}
}
export default contractReducer;