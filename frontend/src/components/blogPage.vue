<template>
    <div class="blog-container">
      <aside class="categories">
        <h2>Categories</h2>
        <ul>
          <li v-for="category in categories" :key="category.id">
            <router-link :to="{ name: 'BlogCategory', params: { categoryId: category.id } }">
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </aside>
      <section class="blog-posts">
        <h2>Blog</h2>
        <div class="posts">
          <div v-for="post in posts" :key="post.id" class="post-preview">
            <h3>{{ post.title }}</h3>
            <p>{{ post.summary }}</p>
            <router-link :to="{ name: 'BlogPost', params: { postId: post.id } }">Read More</router-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogPage',
    data() {
      return {
        categories: [
          { id: 1, name: 'Category 1' },
          { id: 2, name: 'Category 2' },
          // Daha fazla kategori ekleyin
        ],
        posts: [
          { id: 1, title: 'Example Software', summary: 'Description about software...' },
          { id: 2, title: 'Example Software 2', summary: 'Description about another software...' },
          // Daha fazla post ekleyin
        ]
      }
    }
  }
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
  
  .categories h2, .blog-posts h2 {
    color: #4CAF50;
  }
  
  .categories ul {
    list-style: none;
    padding: 0;
  }
  
  .categories li a {
    color: #0645AD;
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
    color: #4CAF50;
    text-decoration: none;
  }
  </style>
  