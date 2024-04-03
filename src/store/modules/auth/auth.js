import Swal from 'sweetalert2';
import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    role: localStorage.getItem('role') || '',
    token: localStorage.getItem('token') || '',
    user: null,
    loading: false,
  },
  getters: {
    isRole: (state) => !!state.role && state.role !== '',
    isAuthenticated: (state) => !!state.token && state.token !== '',
    getMe: (state) => state.user,
    isLoading: (state) => state.loading,
  },
  actions: {
    async login({
      commit
    }, credentials) {
      commit('SET_LOADING', true);
      try {
        const response = await axios.post('/auth/login', credentials);
        const user = response.data;
        commit('SET_USER_LOGIN', user);
        commit('SET_ROLE', user.role);
        commit('SET_TOKEN', user.accessToken);

        // Simpan token ke dalam localStorage
        localStorage.setItem('token', user.accessToken);

        Swal.fire({
          icon: 'success',
          text: 'Login success!',
        });
        return true;
      } catch (error) {
        const errorMessage = error.response.data.msg;
        Swal.fire({
          icon: 'error',
          text: 'Login failed: ' + errorMessage,
        });
        return false;
      } finally {
        commit('SET_LOADING', false);
      }
    },


    async register({
      commit
    }, formRegister) {
      try {
        const response = await axios.post("/auth/register", formRegister);
        const user = response.data;
        commit('SET_USER_LOGIN', user);
        commit('SET_ROLE', user.role);
        commit('SET_TOKEN', user.accessToken);
        Swal.fire({
          icon: 'success',
          text: 'Registration success!',
        });
        return true;
      } catch (error) {
        const errorMessage = error.response ? error.response.data.msg : error.message;
        Swal.fire({
          icon: 'error',
          text: 'Registration failed: ' + errorMessage,
        });
        return false;
      }
    },

    async fetchMe({
      commit,
      state
    }) {
      try {
        const token = state.token;
        const response = await axios.get('/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const user = response.data;
        commit('SET_USER_LOGIN', user);
        return user;
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        return false;
      }
    },

    async logout({
      commit
    }) {
      try {
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        commit('SET_ROLE', '');
        commit('SET_TOKEN', '');
        commit('SET_USER_LOGIN', null);

        Swal.fire({
          icon: 'success',
          text: 'Logout success!',
        });

        return true;
      } catch (error) {
        console.error('Error logging out:', error.message);
        return false;
      }
    },
  },
  mutations: {
    SET_USER_LOGIN(state, user) {
      state.user = user;
    },
    SET_ROLE(state, role) {
      state.role = role;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
  },
};

export default auth;