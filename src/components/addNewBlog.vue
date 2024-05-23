<template>
  <div class="page-container">
    <div class="form-container">
      <h2>Add New Blog</h2>
      <form @submit.prevent="submitBlog">
        <div class="form-group">
          <label for="title">Title:</label>
          <input
            type="text"
            v-model="title"
            id="title"
            required
            class="input-field"
          />
        </div>
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea
            v-model="content"
            id="content"
            rows="5"
            required
            class="input-field"
          ></textarea>
        </div>
        <div class="button-group">
          <button type="submit" class="button">Add Blog</button>
          <button type="button" class="button cancel-button" @click="cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddNewBlog",

  computed: {
    user() {
      if (this.$store.state.user) {
        this.isLoggedIn = true;
        console.log(this.isLoggedIn);
        return this.$store.state.user;
      }
    },
  },

  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    async submitBlog() {
      try {
        await axios.post("http://127.0.0.1:5000/add_blog", {
          user_id: this.user[0],
          blog_category: this.title,
          blog_text: this.content,
        });

        this.$router.push("/admin");
      } catch (error) {
        console.error("Error adding blog:", error);
      }
    },

    cancel() {
      this.$router.push("/admin");
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}
input,
textarea {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #4caf50;
}

.form-container {
  background-color: #b3c6a6;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
  transform: translateY(-80px);
}

.form-group {
  margin-bottom: 15px;
}

.input-field {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #45a049;
}

.cancel-button {
  background-color: #e74c3c;
}

.cancel-button:hover {
  background-color: #c0392b;
}
</style>
