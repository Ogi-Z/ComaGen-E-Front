<template>
  <div class="blog-container">
    <aside class="categories">
      <h2>Categories</h2>
      <ul>
        <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
      </ul>
    </aside>
    <section class="blog-posts">
      <h2>Blog</h2>
      <div class="posts">
        <div v-for="post in posts" :key="post.id" class="post-preview">
          <h3>{{ post.title }}</h3>
          <p>{{ post.summary }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogPage",
  data() {
    return {
      categories: [],
      posts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const [categoriesResponse, postsResponse] = await Promise.all([
          axios.get("http://127.0.0.1:5000/categories"),
          axios.get("http://127.0.0.1:5000/posts")
        ]);
        this.categories = categoriesResponse.data;
        this.posts = postsResponse.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>


<style scoped>
.blog-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.categories {
  width: 20%;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.categories h2,
.blog-posts h2 {
  color: #4caf50;
}

.categories ul {
  list-style: none;
  padding: 0;
}

.categories li a {
  color: #0645ad;
  text-decoration: none;
}

.blog-posts {
  width: 75%;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.post-preview {
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.post-preview h3 {
  color: #333;
}

.post-preview p {
  color: #666;
}

.post-preview a {
  color: #4caf50;
  text-decoration: none;
}
</style>
