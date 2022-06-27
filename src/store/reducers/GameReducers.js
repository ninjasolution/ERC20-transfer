import { SELECT_BETTING, SELECT_GAME, SELECT_PLAY_MODE } from "../actions/GameActions";

const gameReducer = (state = { game: {}, betting: {}, mode: "" }, { type, payload }) =>{
	switch(type){
		case SELECT_GAME: 
			return {
				...state,
				game: payload
			}
		case SELECT_BETTING:
			return {
				...state,
				betting: payload
			}
		case SELECT_PLAY_MODE:
			return {
				...state,
				mode: payload
			}
		default:
			return state;
		 
	}
}
export default gameReducer;