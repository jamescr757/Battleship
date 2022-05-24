import types from "./index";

export const updateWins = wins => ({
    type: types.UPDATE_USER_WINS,
    data: wins
})

export const updateLosses = losses => ({
    type: types.UPDATE_USER_LOSSES,
    data: losses
})

export const loadUserInfo = user => ({
    type: types.LOAD_USER_INFO,
    data: user  
})

export const saveGame = game => ({
    type: types.SAVE_GAME,
    data: game  
})