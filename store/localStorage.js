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
    LOGIN: (state, data) => {
        state.users.forEach(u => {
            if (data.mail == u.mail && data.password == u.password) {
                state.user.id = u.id;
                state.user.name = u.name;
                state.user.mail = u.mail;
                state.user.password = u.password;
                state.user.connected = true;
            } else {
                console.log(data.mail, u.mail);
            }
        })
    },
    LOGOUT: (state, data) => {
        state.user.id = null;
        state.user.name = null;
        state.user.mail = null;
        state.user.password = null;
        state.user.connected = false;
    }
}


export const ACTIONS = {
    ADD_USER: 'localStorage/addUser',
    LOGIN: 'localStorage/login',
    LOGOUT: 'localStorage/logout'
}

export const actions = {
    addUser({ commit }, data) {
        commit("ADD_USER", data);
    },
    login({ commit }, data) {
        commit("LOGIN", data);
    },
    logout({ commit }) {
        commit("LOGOUT");
    },
    

}