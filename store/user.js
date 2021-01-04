import Vuex from 'vuex'
import Vue from 'vue'

import firebase from '@/plugins/firebase'
import { actions } from './basket'



const createStore = () => {
    return new Vuex.Store({
        state: {
            //data


            user: '',
            status: '',
            error: '',


        },

        getters: {
            status(state) {
                return state.status
            },
            user(state) {
                return state.user
            },
            error(state) {
                return state.error
            }
        },

        actions: {
            signupAction({ commit }, payload) {

                commit('setStatus', 'loading')
                firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                    .then((response) => {
                        alert('success')
                        commit('setUser', response.user.uid)
                        commit('setStatus', 'success')
                        commit('setError', null)
                    })
                    .catch((error) => {
                        commit('setStatus', 'failure')
                        commit('setError', error.message)
                    })
            },
            signInAction({ commit }, payload) {
                firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).
                then((response) => {
                        commit('setUser', response.user.uid)
                        commit('setStatus', 'success')
                        commit('setError', null)
                    })
                    .catch((error) => {
                        commit('setStatus', 'failure')
                        commit('setError', error.message)
                    })

            },
            signOutAction({ commit }) {
                firebase.auth().signOut()
                    .then((response) => {
                        commit('setUser', null)
                        commit('setStatus', 'success')
                        commit('setError', null)
                    })
                    .catch((error) => {
                        commit('setStatus', 'failure')
                        commit('setError', error.message)
                    })

            },
        },

        mutations: {
            setUser(state, payload) {
                state.user = payload
            },
            removeUser(state) {
                state.user = null
            },
            setStatus(state, payload) {
                state.status = payload
            },
            setError(state, payload) {
                state.error = payload
            },

        }


    })
}
export default createStore