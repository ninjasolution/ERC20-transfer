import { SET_LOADING } from "../actions/GlobalActions";

const globalReducer = (state = { isLoading: false  }, { type, payload }) =>{
	switch(type){
		case SET_LOADING: 
			return {
				...state,
				isLoading: payload,
			};
	
		default:
			return state;
		 
	}
}
export default globalReducer;