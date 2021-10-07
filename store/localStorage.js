export const state = () => ({
    users: [{
        id: 0,
        name: "Florent",
        mail: "chabin.florent@gmail.com",
        password: "123mdp"
    }],
    user: {
        id: null,
        name: null,
        mail: null,
        password: null,
        connected: false,
    }
})


export const mutations = {
    INCREMENT: (state, data) => state.users.push(data),
    LOGIN: (state, data) => {
        state.users.forEach(user => {
            if(data.mail == user.mail && data.password == user.password){
                state.user.id = user.id;
                state.user.name = user.name;
                state.user.mail = user.mail;
                state.user.password = user.password;
                state.user.connected = true;
            }else{
                console.log(data.mail, user.mail);
            }
        })
    }
}


export const ACTIONS = {
    ADD_USER: 'localStorage/add',
    LOGIN: 'localStorage/login'
}

export const actions = {
    add_user({commit}, data) {
        commit("INCREMENT", data);
    },
    login({commit}, data) {
        commit("LOGIN", data);
    }

}