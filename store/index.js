export const state = () => ({
    login: true
})

export const mutations = {
    SWITCH_LOGIN: (state) => {state.login = !state.login}
}

export const ACTIONS = {
    SWITCH_LOGIN: 'switchLogin',
}

export const actions = {
    switchLogin({commit}){
        commit("SWITCH_LOGIN");
    } 
}