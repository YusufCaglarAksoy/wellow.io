import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
    state:{
        user: null,
        token:null,
        firstLogin:null,
    },
    mutations:{
        setUser(state, data,token){
            state.user = data;
            state.token = token;
        },
        changeFirstLogin(state,boolAttr){
            state.firstLogin = boolAttr;
        },
        logoutUser(state) {
            state.user = null;
        },
    },
    getters:{
        _isAuthenticated: state => state.user !== null,
        _getCurrentUser(state) {
          const user = state.user;
          delete user?.password;
          return user;
        },
        _getFirstLogin: state =>state?.firstLogin,
        _currentUserId: state => state?.user?.id,
        _saltKey: state => state.saltKey
    },
    plugins: [
        createPersistedState({
          storage: {
            getItem: key => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: key => ls.remove(key)
          }
        })
      ]
})