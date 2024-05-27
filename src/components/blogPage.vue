<template>
  <div class="page-container">
    <v-row class="blog-container">
      <v-col cols="3">
        <div class="categories">
          <h2>Categories</h2>
          <v-chip
            class="chips"
            @click="selectedCat = category"
            v-for="category in categories"
            :key="category"
            >{{ category }}</v-chip
          >
        </div>
      </v-col>
      <v-col>
        <section class="blog-posts">
          <h2>Blog</h2>
          <div class="posts">
            <div v-for="post in posts" :key="post[0]">
              <div
                v-if="post[2] == selectedCat || selectedCat == ''"
                class="post-preview"
              >
                <h3 class="text">{{ post[3] }}</h3>
                <p class="text">{{ post[4] }}</p>
                <v-img
                  class="img"
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                ></v-img>
              </div>
            </div>
          </div>
        </section>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogPage",
  computed: {
    categories() {
      const categories = this.posts.map((post) => post[2]);
      return [...new Set(categories)];
    },
  },

  data() {
    return {
      selectedCat: "",
      posts: [],
    };
  },
  mounted() {
    this.getFindings();
  },

  methods: {
    async getFindings() {
      try {
        const response = await axios.get("http://127.0.0.1:5000/blogs");
        this.posts = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching software list:", error);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Newsreader:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Neucha&display=swap");

.page-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: white;
  height: 100vh;
  overflow-y: auto;
  font-family: "Neucha", serif;
}

.blog-container {
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

.categories {
  background-color: #b3c6a6;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.blog-posts {
  background-color: #b3c6a6;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.text {
  color: black;
  font-family: "Neucha", serif;
  margin-left: 3%;
}

.chips {
  background-color: #426b1f;
  margin-top: 10px;
  margin-right: 10px;
}
.img {
  border-radius: 20px;
  margin-top: 10px;
}
.categories {
  flex: 1;
  max-width: 250px;
}

.blog-posts {
  flex: 2;
}

h2 {
  font-weight: 700;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: white;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

li:hover {
  background-color: #e0e0e0;
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post-preview {
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h3 {
  font-weight: 700;
  margin-bottom: 10px;
}

p {
  margin-bottom: 0;
}
</style>
