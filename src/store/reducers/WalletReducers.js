import { RESET_WEB3_PROVIDER, SET_ADDRESS, SET_BALANCE, SET_CHAIN_ID, SET_WEB3_PROVIDER } from "../actions/WalletActions"

const initialState = {
    provider: null,
    web3Provider: null,
    address: null,
    chainId: null,
}

const walletReducer = (state = { }, { type, payload }) =>{
	switch (type) {
		case SET_WEB3_PROVIDER:
		  return {
			...state,
			provider: payload.provider,
			web3Provider: payload.web3Provider,
			address: payload.address,
			web3: payload.web3,
			chainId: payload.chainId,
		  }
		case SET_ADDRESS:
		  return {
			...state,
			address: payload.address,
		  }
		case SET_CHAIN_ID:
		  return {
			...state,
			chainId: payload.chainId,
		  }
		case SET_BALANCE: 
			return {
				...state,
				balance: payload
			}  
		case RESET_WEB3_PROVIDER:
		  return initialState
		default:
		  return state
	  }
}
export default walletReducer;