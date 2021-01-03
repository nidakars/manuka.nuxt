import { realDb, auth } from '~/plugins/firebase.js';
import firebase from "firebase";
export const state = () => ({

})
export const getters = {}
export const actions = {
    /* async nuxtServerInit({ dispatch, state }, { req }) {
        console.log("initialize acted")
        await setTimeout(function () {
            const user = firebase.auth().currentUser
            console.log(user.uid)
            if (user) {
                state.user = user;
                dispatch('Products/fetchCartItems')

            }
        }, 2000);

    }, */
}
export const mutations = {}