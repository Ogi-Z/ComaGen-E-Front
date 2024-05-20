<template>
  <div class="header">
    <router-link to="/" class="logo" exact>Comagen-E</router-link>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
      <router-link to="/user-profile" v-if="isLoggedIn">Profile</router-link>
      <router-link to="/admin">Admin Panel</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/software-listing">Software Listing</router-link>
      <router-link to="/submit-problem">Submit Problem</router-link>
      <router-link to="/logout" v-if="isLoggedIn">Logout</router-link>
    </div>
  </div>
</template>

  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Times New Roman', serif; 
}

.logo {
  font-size: 24px;
  font-weight: 700;
  color: #4CAF50;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  font-size: 16px;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #4CAF50; 
}

.nav-links .button {
  padding: 10px 20px;
  border: none;
  border-radius: 25px; 
  background-color: #4CAF50; 
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 500; 
  font-size: 16px;
}

.nav-links .button:hover {
  background-color: #45a049;
}
</style>

  