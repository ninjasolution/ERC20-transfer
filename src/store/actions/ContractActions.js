export const SET_CONTRACT = "SET_CONTRACT"
export const SET_TOKEN = "SET_TOKEN";


export const setContractAction = contract => ({ type: SET_CONTRACT, payload: contract });

export const setTokenAction = token => ({ type: SET_TOKEN, payload: token });