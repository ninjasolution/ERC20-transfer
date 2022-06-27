export const SELECT_GAME = "SELECT_GAME";
export const SET_SCORE = "SET_SCORE";
export const SELECT_BETTING = "SELECT_BETTING";
export const SELECT_PLAY_MODE = "SELECT_PLAY_MODE";

export const selectGameAction = game => ({ type: SELECT_GAME, payload: game });

export const selectBettingAction = betting => ({ type: SELECT_BETTING, payload: betting });

export const setPlayModeAction = mode => ({ type: SELECT_PLAY_MODE, payload: mode });