export const SET_WEB3_PROVIDER = "SET_WEB3_PROVIDER";
export const RESET_WEB3_PROVIDER = "RESET_WEB3_PROVIDER";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_CHAIN_ID = "SET_CHAIN_ID";
export const SET_BALANCE = "SET_BALANCE";

export const setWeb3ProviderAction = provider => ({ type: SET_WEB3_PROVIDER, payload: { ...provider } });

export const resetWeb3ProviderAction = () => ({ type: RESET_WEB3_PROVIDER, payload: {} });

export const setAddressAction = address => ({ type: SET_ADDRESS, payload: address })

export const setChainIdAction = id => ({ type: SET_CHAIN_ID, payload: id });

export const setBalanceAction = balance => ({ type: SET_BALANCE, payload: balance });
