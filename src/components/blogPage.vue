<template>
  <div class="page-container">
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
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'BlogPage',
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
          axios.get('http://127.0.0.1:5000/categories'),
          axios.get('http://127.0.0.1:5000/posts'),
        ]);
        this.categories = categoriesResponse.data;
        this.posts = postsResponse.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.page-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: white; 
  height: 100vh;
  overflow-y: auto;
  font-family: 'Times New Roman', serif; 
}

.blog-container {
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

.categories, .blog-posts {
  background-color: #b3c6a6; 
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

