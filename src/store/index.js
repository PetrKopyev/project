import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        image: '' || localStorage.getItem('image'),
        name: 'Иван Иванович',
        email: 'ivanivanovich@mail.ru',
        phone: '+7 999 999 99 99',
        password: '12345678'
    },
    mutations: {
        SET_IMAGE(state, payload) {
            state.image = payload
        },
        DELETE_IMAGE(state) {
            state.image = ''
        },
        SET_PASSWORD(state, payload) {
            state.password = payload
        },
        CHANGE_NAME(state, payload) {
            state.name = payload
        },
        CHANGE_EMAIL(state, payload) {
            state.email = payload
        },
        CHANGE_PHONE(state, payload) {
            state.phone = payload
        }
    },
    actions: {
        async setImage({commit}, file) {
            let formData = new FormData();
            formData.append('avatar', file);
            try {
                const {data} = await axios.post('https://tinn.io/api/test/avatar',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                const image = data.data.avatar
                localStorage.setItem('image', image)
                commit('SET_IMAGE', image);
            } catch (e) {
                throw new Error(e)
            }
        },
        deleteImage({commit}) {
            localStorage.removeItem('image')
            commit('DELETE_IMAGE')
        },
        setPassword({commit}, password) {
            commit('SET_PASSWORD', password)
        },
        changeName({commit}, name) {
            commit('CHANGE_NAME', name)
        },
        changeEmail({commit}, email) {
            commit('CHANGE_EMAIL', email)
        },
        changePhone({commit}, phone) {
            commit('CHANGE_PHONE', phone)
        },

    },
    getters: {}
})
