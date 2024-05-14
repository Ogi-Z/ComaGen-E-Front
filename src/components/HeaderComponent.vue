<template>
  <div class="header">
    <router-link to="/" class="logo" exact>TermProject</router-link> <!-- Updated to be a router-link -->
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  background-color: white; /* Background color white */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
  font-weight: bold;
  color: #4CAF50; /* Green color */
  font-size: 24px; /* Increased size */
  font-family: 'Times New Roman', serif; /* Times New Roman font */
  text-decoration: none; /* Remove underline from links */
}

.nav-links a {
  color: black; /* Link color black */
  margin-left: 20px; /* Increased left margin */
  font-size: 16px; /* Font size */
  text-decoration: none; /* Remove underline from links */
  font-family: 'Times New Roman', serif; /* Times New Roman font */
}

.nav-links a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>
