<template>
  <div class="header">
    <router-link to="/" class="logo" exact>Comagen-E</router-link>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/owner_register" v-if="!isLoggedIn"
        >Owner Register</router-link
      >
      <router-link to="/owner_login" v-if="!isLoggedIn"
        >Owner Login</router-link
      >

      <router-link to="/register" v-if="!isLoggedIn">Register</router-link>

      <router-link to="/admin" v-if="role() == 2">Admin Panel</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/software-listing">Software Listing</router-link>
      <router-link to="/submit-problem" v-if="isLoggedIn"
        >Submit Problem</router-link
      >
      <router-link to="/user-profile" v-if="isLoggedIn"
        ><v-btn size="30px" icon="mdi-account-outline"></v-btn
      ></router-link>
      <router-link class="login" to="/login" v-if="!isLoggedIn"
        >Login</router-link
      >

      <router-link class="logout" to="/" @click="logOut()" v-if="isLoggedIn"
        >Logout</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {},

  methods: {
    logOut() {
      location.reload();
    },
    role() {
      if (this.user && this.user.length >= 7) {
        if (this.user[6] === 2) {
          return 2;
        } else if (this.user[7] === 1) {
          return 1;
        }
      } else {
        // Handle the case when 'this.user' is undefined or incomplete
        // You can return a default value or handle it according to your use case
        return -1; // Default value or appropriate indicator
      }
    },
  },

  data() {
    return {
      isLoggedIn: false,
    };
  },

  computed: {
    user() {
      if (this.$store.state.user) {
        this.isLoggedIn = true;
        console.log(this.isLoggedIn);
        return this.$store.state.user;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Neucha&display=swap");

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: "Neucha", serif;
}

.logo {
  font-family: "Newsreader";
  font-size: 32px;
  font-weight: 500;
  color: #3a5f3c;
  text-decoration: none;
  font-style: normal;
  margin-left: 60px;
  margin-top: 20px;
}

.nav-links {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-right: 60px;
}

.login {
  color: #45a049 !important;
  font-weight: 600 !important;
}

.logout {
  color: #ff0000 !important;
  font-weight: 600 !important;
}
.nav-links a {
  font-size: 16px;
  color: #000000;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: "Inter";
  margin-left: 15px;
}

.nav-links a:hover {
  color: #4caf50;
}

.nav-links .button {
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  background-color: #4caf50;
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
