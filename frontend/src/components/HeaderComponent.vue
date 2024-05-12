<template>
    <div class="header">
      <div class="logo">TermProject</div>
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
    background-color: white; /* Arka plan beyaz */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .logo {
    font-weight: bold;
    color: #4CAF50; /* Yeşil renk */
    font-size: 24px; /* Boyut arttırıldı */
    font-family: 'Times New Roman', serif; /* Times New Roman fontu */
  }
  
  .nav-links a {
    color: black; /* Link rengi siyah */
    margin-left: 20px; /* Sol boşluk arttırıldı */
    font-size: 16px; /* Font boyutu */
    text-decoration: none;
    font-family: 'Times New Roman', serif; /* Times New Roman fontu */
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  </style>
  