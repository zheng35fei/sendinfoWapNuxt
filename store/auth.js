export const state = () => ({
    user: ''
})

export const mutations = {
    // setUser( state, user ){
    //     state.user = user
    // },
    //
    // logout(state) {
    //     state.user = null
    // }
}

export const getters = {
    username : state => {
        return state.user && state.user.realName
    }
}