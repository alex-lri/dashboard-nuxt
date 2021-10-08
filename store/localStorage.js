export const state = () => ({
    users: [],
    user: {
        id: null,
        name: null,
        mail: null,
        password: null,
        connected: false,
    },
    status: true
})


export const mutations = {
    ADD_USER: (state, data) => state.users.push(data),
    DELETE_USER: (state, data) => {
        for(let i = 0; i < state.users.length; i++){
            if(data.id == state.users[i].id){
                state.users.splice(i, 1);
            }
        }
    },
    LOGIN: (state, data) => {
        state.users.forEach(u => {
            if (data.mail == u.mail && data.password == u.password) {
                state.user.id = u.id;
                state.user.name = u.name;
                state.user.mail = u.mail;
                state.user.password = u.password;
                state.user.connected = true;
            }
        })
    },
    LOGOUT: (state) => {
        state.user.id = null;
        state.user.name = null;
        state.user.mail = null;
        state.user.password = null;
        state.user.connected = false;
    }
}


export const ACTIONS = {
    ADD_USER: 'localStorage/addUser',
    DELETE_USER: 'localStorage/deleteUser',
    LOGIN: 'localStorage/login',
    LOGOUT: 'localStorage/logout'
}

export const actions = {
    addUser({ commit }, data) {
        commit("ADD_USER", data);
    },
    deleteUser({ commit }, data) {
        commit("DELETE_USER", data);
    },
    login({ commit }, data) {
        commit("LOGIN", data);
    },
    logout({ commit }) {
        commit("LOGOUT");
    },
    

}