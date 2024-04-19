import axios from "axios";

const article = {
  namespaced: true,
  state: {
    article: [],
    selectedarticle: []
  },

  getters: {
    getArticle: (state) => state.article,
  },

  actions: {
    async fetchArticle({
      commit
    }) {
      try {
        const response = await axios.get("/articles");
        commit("SET_ARTICLE", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching article:", error.response.data.msg);
        throw error;
      }
    },

    async fetchArticleById({
      commit
    }, id) {
      try {
        const response = await axios.get(`/articles/${id}`);
        commit("SET_SELECTED_ARTICLE", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching article by ID:", error.response.data.msg);
        throw error;
      }
    },


    async createArticle({
      commit
    }, formKey) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post("/articles/add", formKey, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("ADD_ARTICLE", response.data);
        return response.data;
      } catch (error) {
        console.error("Error creating article:", error.response.data.msg);
        throw error;
      }
    },

    async updateArticle({
      commit
    }, {
      id,
      formKey
    }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.patch(`/articles/edit/${id}`, formKey, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Perbarui data di store setelah update berhasil
        commit("UPDATE_ARTICLE", response.data);
        return response.data;
      } catch (error) {
        console.error("Error updating expenses:", error.response.data.msg);
        throw error;
      }
    },

    async deleteArticle({
      commit
    }, {
      id // Menggunakan 'uuid' sebagai kunci
    }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.delete(`/articles/delete/${id}`, { 
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error deleting article:", error.response.data.msg);
        throw error;
      }
    }  

  },

  mutations: {
    SET_ARTICLE(state, article) {
      state.article = article;  
    },
    SET_SELECTED_ARTICLE(state, article) {
      state.selectedarticle = article;
    },
    ADD_ARTICLE(state, article) {
      state.article.push(article);
    },
    UPDATE_ARTICLE(state, updatedArticle) {
      // Cari indeks dari pendapatan yang akan diupdate
      const index = state.article.findIndex(article => article.id === updatedArticle.id);
      // Jika indeks ditemukan, update data pada indeks tersebut dengan data yang baru
      if (index !== -1) {
        state.article.splice(index, 1, updatedArticle);
      }
    }
  },
};

export default article;